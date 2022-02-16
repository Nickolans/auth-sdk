class Auth {
  constructor(client) {
    this.client = client;
  }

  /**
   * 
   *  ```
   * registerUser({ email: "xyz@email.com", password: "passwordxyz" });
   * ```
   * 
   * @param email
   * @param password
   * 
   * @returns reponse
   */
  async registerUser(params) {
    return this.client.post("/auth/register", params);
  } 

  /**
   * 
   * ```
   * login({ email: "xyz@email.com", password: "passwordxyz" })
   * .then((user) => {
   *  // ...
   * })
   * ```
   * 
   * @param email
   * @param password 
   * @returns user
   */
  async login(params) {
    return this.client.post ("/auth/login/email", { email: params.email, password: params.password }).then((response) => {
      const { user, tokens } = response;
      const { token, expires } = tokens.access;
      // TODO: Do something with user lol
      this.user = user;
      return user;
    })
  }

  async loginWithGoogleData(data) {
    return this.client.post("/auth/login/google", { token: data.idToken }).then((response) => {
      const { user, tokens } = response;
      const { token, expires } = tokens.access;
      // TODO: Do something with user lol
      return user;
    })
  }

  async loginWithFacebookData(data) {
    return this.client.post("/auth/login/facebook", { token: data.accessToken }).then((response) => {
      const { user, tokens } = response;
      const { token, expires } = tokens.access;
      // TODO: Do something with user lol
      return user;
    })
  }

  async loginWithAppleData(data) {
    return this.client.post("/auth/login/apple", { token: data.identityToken }).then((response) => {
      const { user, tokens } = response;
      const { token, expires } = tokens.access;
      // TODO: Do something with user lol
      return user;
    })
  }

  async logout() {
    return this.client.post("/auth/logout", {}).finally(() => {
      // TODO: Handle current user data
      return true;
    })
  }

  async forgotPassword(params) {
    return this.client.post("/auth/forgot-password", { email: params.email })
  }

  async resetPassword() {
    // TODO: Grab user token
    return this.client.post(`/auth/reset-password?token=${this.client.accessToken}`, { password: params.password })
  }
}

export default Auth;