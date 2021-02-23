import axios from "axios";

const API_URL = process.env.VUE_APP_BASE_URL + "/auth/";

class AuthService {
  login(user) {
    console.log("API: ", API_URL);
    return axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    // localStorage.clear();
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      ippis: user.ippis,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
  }

  passwordReset(user) {
    return axios.post(API_URL + "reset-password", {
      email: user.email,
      password: user.password,
      token: user.token,
    });
  }

  activationEmail(emailRequest) {
    return axios.post(API_URL + "send-email", {
      email: emailRequest.email,
      otpNo: emailRequest.otpNo,
    });
  }

  passwordResetEmail(emailRequest) {
    return axios.post(API_URL + "password-reset-email", {
      email: emailRequest.email,
      otpNo: emailRequest.otpNo,
    });
  }
  verifyToken(token) {
    return axios.get(API_URL + `confirm-account?token=${token}`);
  }
}

export default new AuthService();
