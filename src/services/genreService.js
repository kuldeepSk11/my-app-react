import http from "../services/httpServices";
//import { apiUrl } from "../apiConfig/config.json";

export function getGenres() {
  //return http.get(apiUrl + "/genres");
  return http.get('https://mosh-vidly-node-api.herokuapp.com/api/genres');
}
