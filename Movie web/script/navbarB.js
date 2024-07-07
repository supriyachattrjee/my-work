function button() {
  document.querySelector("#nav>h3").addEventListener("click", function () {
    window.location.assign("index.html");
  });
  document
    .querySelector("#auth>h3:nth-child(1)")
    .addEventListener("click", function () {
      window.location.assign("login.html");
    });
  document
    .querySelector("#auth>h3:nth-child(2)")
    .addEventListener("click", function () {
      window.location.assign("SignUp.html");
    });
  document.querySelector("#search").addEventListener("click", function () {
    window.location.assign("search.html");
  });
}

export default button;
