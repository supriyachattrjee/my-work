document.querySelector("#add-b").addEventListener("click", redirect);
function redirect() {
  document.location = "index.html";
}
let body = document.querySelector("#products_data");
let data = JSON.parse(localStorage.getItem("data")) || [];

append(data);
function append(ld) {
  body.innerHTML = null;
  ld.forEach(function (el, i) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    let name = document.createElement("h3");
    name.innerText = el.name;
    let brand = document.createElement("h3");
    brand.innerText = el.brand;
    let price = document.createElement("h3");
    price.innerText = el.price;
    let button = document.createElement("button");
    button.addEventListener("click", function () {
      remove(i);
    });
    button.innerText = "Remove Product";
    div.append(image, name, brand, price, brand, button);
    body.append(div);
  });
}

function remove(id) {
  data.splice(id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  append(data);
}

if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
  };
}
