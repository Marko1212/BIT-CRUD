import { ENDPOINT_LOGIN } from "../shared/constants";
import { postRequestPublic } from "./APIService";
import { storeUserData } from "./storageService";
import { handleError } from "./errorService";


export const login = (data) => {
  let onLoginSuccess = (response) => {
    // call me when data is fetched succesfully
    console.log('Login success ');
    console.log(response);
    storeUserData(response.data);
  }
  return postRequestPublic(ENDPOINT_LOGIN, data, onLoginSuccess, handleError);
}
