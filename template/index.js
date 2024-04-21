document.querySelector("form").addEventListener("submit", submitf);
let count = 0;
let stock_price = 0;
function submitf(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  let obj = {
    name: form.compName.value,
    exchange: form.listedExchange.value,
    industry: form.industry.value,
    price: +form.stockPrice.value,
    quantity: +form.quantity.value,
    type: form.type.value,
  };

  let Ntr = document.createElement("tr");

  let name = document.createElement("td");
  name.innerText = obj.name;

  let exchange = document.createElement("td");
  exchange.innerText = obj.exchange;

  let industry = document.createElement("td");
  industry.innerText = obj.industry;

  let price = document.createElement("td");
  price.innerText = obj.price;

  let quantity = document.createElement("td");
  quantity.innerText = obj.quantity;

  let type = document.createElement("td");
  type.innerText = obj.type;

  let total = document.createElement("td");
  total.innerText = obj.price * obj.quantity;

  let adate = document.createElement("td");

  const date = new Date("April 17, 2024 03:24:00");

  adate.innerText = date.toLocaleDateString();

  let sell = document.createElement("td");
  sell.innerText = "Sell";
  sell.addEventListener("click", function (e) {
    e.target.parentNode.remove();
    count--;
    stock_price -=
      +e.target.parentNode.childNodes[3].innerText *
      +e.target.parentNode.childNodes[4].innerText;
    document.querySelector("#noOfStock").innerText = count;
    document.querySelector("#totalPortfolio").innerText = stock_price;
  });
  Ntr.append(
    name,
    exchange,
    industry,
    price,
    quantity,
    type,
    total,
    adate,
    sell
  );

  if (
    obj.name == "" ||
    obj.exchange == "" ||
    obj.industry == "" ||
    obj.price == "" ||
    obj.quantity == "" ||
    obj.type == ""
  ) {
    alert("Plese fill the full form");
  } else {
    document.querySelector("tbody").append(Ntr);
    count++;
    stock_price += obj.price * obj.quantity;
    document.querySelector("#noOfStock").innerText = count;
    document.querySelector("#totalPortfolio").innerText = stock_price;
  }

  form.compName.value = "";
  form.listedExchange.value = "";
  form.industry.value = "";
  form.stockPrice.value = "";
  form.quantity.value = "";
  form.type.value = "";
}
