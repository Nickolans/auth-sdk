import Auth from "./Auth/services/auth.service.js";
import Client from "./Auth/client.js";

class AuthSdk {
  constructor(params = {}) {
    this.client = new Client(params);
    this.version = this.client.version;

    // Here's a thing...
    this.http = this.client.http;
    this.auth = new Auth(this.client);
  }
}

export default AuthSdk;
