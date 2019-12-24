import { ENDPOINT_REGISTER } from "../shared/constants";
import { postRequestPublic } from "./APIService";
import { storeUserData } from "./storageService";
import { handleError } from "./errorService";


const register = (data) => {
  let onRegisterSuccess = (response) => {
    // call me when data is fetched succesfully
    console.log('register success ');
    console.log(response);
    storeUserData(response.data);
  }
  return postRequestPublic(ENDPOINT_REGISTER, data, onRegisterSuccess, handleError);
}

export { register }
