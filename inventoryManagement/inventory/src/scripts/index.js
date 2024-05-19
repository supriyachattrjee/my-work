document.querySelector("#show-products").addEventListener("click", redirect);
function redirect() {
  document.location = "inventory.html";
}
let lsData = JSON.parse(localStorage.getItem("data")) || [];
let form = document.querySelector("form");
form.addEventListener("submit", getFormData);

function getFormData(e) {
  let name = form.product_name.value;
  let brand = form.product_brand.value;
  let price = form.product_price.value;
  let image = form.product_image.value;
  if (name == "" || brand == "" || price == "" || image == "") {
    alert("plese fill the form poperly");
  } else {
    let l1 = new addData(name, brand, price, image);
    lsData.push(l1);
  }
  localStorage.setItem("data", JSON.stringify(lsData));
}

function addData(name, brand, price, imageLink) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.image = imageLink;
}

if (typeof exports !== "undefined") {
  module.exports = {
    addData,
    redirect,
  };
}
