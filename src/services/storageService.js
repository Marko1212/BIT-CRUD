var jwt = require('jsonwebtoken');

export const storeUserData = (response) => {
  let user = jwt.decode(response.accessToken);
  let userId = user.id.toString();
  sessionStorage.setItem("accessToken", response.accessToken);
  sessionStorage.setItem("userId", userId);
  sessionStorage.setItem("loggedIn", "true");
  browserReloadGoHome();
};

export const userIdGet = () => {
  return sessionStorage.getItem('userId');
}

export const isLoggedIn = () => {
  let storedloggedIn = sessionStorage.getItem('loggedIn');
  if (storedloggedIn === "true") {
    return true;
  }
  return false;
}

export const logout = () => {
  sessionStorage.clear();
  browserReloadGoHome();
}

export const browserReload = () => {
  window.location.reload(true); // reload browser tab
};

export const browserReloadGoHome = () => {
  window.location.href = ""; // reload browser tab plus go home route
};
