import axios from "axios";
import QueryString from "qs";

class Client {
  constructor(options = {}) {
    this.accessToken = options.accessToken;
    this.webhookToken = options.webhookToken;
    this.version = "0.0.1"//pkg.version;

    if (this.accessToken) {
      this.http = axios.create({
        withCredentials: false,
        baseURL: options.baseUrl,
        headers: {
          common: {
            'Authorization': 'bearer ' + this.accessToken
          }
        },
        paramsSerializer: params => {
          return QueryString.stringify(params)
        }
      });
    } else {
      this.http = axios.create({
        withCredentials: false,
        baseURL: options.baseUrl,
        paramsSerializer: params => {
          return QueryString.stringify(params)
        }
      });
    }
  }

  async get(url, params = {}) {
    const { data } = await this.http.get(url, { ...params });
    return data;
  }

  async post(url, params = {}) {
    const { data } = await this.http.post(url, params);
    return data;
  }

  async put(url, params = {}) {
    const { data } = await this.http.put(url, params);
    return data;
  }

  async delete(url, params = {}) {
    const { data } = await this.http.delete(url, params);
    return data;
  }
}

// module.exports = Client;
export default Client;