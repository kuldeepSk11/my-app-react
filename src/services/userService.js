import http from "../services/httpServices";
//import { apiUrl } from "../apiConfig/config.json";

const apiEndpoint = "https://mosh-vidly-node-api.herokuapp.com/api/users";

export function register(data) {
  return http.post(apiEndpoint, {
    emailId: data.emailId,
    password: data.password,
    userName: data.userName
  });
}
