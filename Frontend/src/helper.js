export const API = "http://localhost:1337/api/";
export const IMG_PATH_URL = "http://localhost:1337";
export const TOKEN = "authToken";
export const BEARER = "Bearer";
export function GET_TOKEN() {
  return localStorage.getItem("token");
}
