import { apiClient }
from "../api/ApiClient";

class AuthService {

  /*
  ADMIN LOGIN
  */

  login(
    email: string,
    password: string
  ) {

    return apiClient.post(

      "/auth/login",

      {
        email,
        password
      },

      false
    );
  }
}

export default
  new AuthService();