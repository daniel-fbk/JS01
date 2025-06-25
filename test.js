let useRName = "Daniel";
let useRAge = 18;
let useRIsLoggedIn = true;
let useRIsBlocked = false;
let goTOPage = "";

if (userName === "Daniel" && userAge <= 18 && userIsBlocked === false) {
  console.log("Auth. process success!");
  goTOPage = "success.html";
  window.location.href = goTOPage;
} else {
  console.log("Error auth. process failed.");
  goTOPage = "fail.html";
  window.location.href = goTOPage;
}
