## Getting Started

---

### Create unauthenticated caller service

```js
import AuthSdk from "auth-sdk";

const service = new AuthSdk({ baseUrl: "https://mycoolsite.fun" });
```

---

### User Management

#### Create user

```js
service.auth.registerUser({
  email: "cool@example.com",
  password: "password123",
});
```

#### Login

```js
service.auth
  .login({ email: "cool@example.com", password: "password123" })
  .then((user) => {
    console.log("user: ", user);
  });
```

#### Login with Google Data

```js
service.auth.loginWithGoogleData(data).then((user) => {
  console.log("user: ", user);
});
```

#### Login with Facebook Data

```js
service.auth.loginWithFacebookData(data).then((user) => {
  console.log("user: ", user);
});
```

#### Login with Apple Data

```js
service.auth.loginWithAppleData(data).then((user) => {
  console.log("user: ", user);
});
```

#### Forgot Password

```js
service.auth.forgotPassword({ email: "xyz@example.com" });
```

---

### Create authenticated caller service

```js
import AuthSdk from "auth-sdk";

const authenticatedService = new AuthSdk({
  baseUrl: "https://mycoolsite.fun",
  accessToken: "xyz123",
});
```

#### Forgot Password

```js
authenticatedService.auth.forgotPassword({ email: "xyz@example.com" });
```

#### Authenticated Requests

```js
authenticatedService.http.post("/auth/...", {});
authenticatedService.http.get("/auth/...", {});
authenticatedService.http.put("/auth/...", {});
authenticatedService.http.delete("/auth/...", {});
```
