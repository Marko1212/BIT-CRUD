var jwt = require('jsonwebtoken');

export const storeUserData = (response) => {
  // nakon uspesnog logovanja stigli su podaci sa servera. Dekodiramo ih pomocu jsonwebtoken
  let user = jwt.decode(response.accessToken);
  let userId = user.id.toString();
  // kada su podaci sa servera dekodirani i pretvoreni u upotrebljive informacije, zapisujemo ih u storage memoriju browsera
  sessionStorage.setItem("accessToken", response.accessToken);
  sessionStorage.setItem("userId", userId);
  sessionStorage.setItem("loggedIn", "true");
  // kada su podaci upisani u browser storage, vrsimo refresh browsera
  browserReloadGoHome();
};

export const userIdGet = () => {
  return sessionStorage.getItem('userId');
}

export const logout = () => {
  sessionStorage.clear();
  // kada su podaci svi obrisani iz browser storagea, vrsimo refresh browsera
  browserReloadGoHome();
}

export const isLoggedIn = () => {
  /*
  logout je na neki nacin suprotnost od login. login znaci upisi da je ulogovan. a logout znaci obrisi da je ulogovan.
  */
  let storedloggedIn = sessionStorage.getItem('loggedIn');
  if (storedloggedIn === "true") {
    return true;
  }
  return false;
}

export const browserReload = () => {
  window.location.reload(true); // reload browser tab
};

export const browserReloadGoHome = () => {
  // varijacija prethodne funkcije koja osim sto refreshuje browser vrati ga na pocetnu rutu "localhost/"
  window.location.href = ""; // reload browser tab plus go home route
};
