// Write All `My Movies`  Page Script Here
let allbuy = JSON.parse(localStorage.getItem("buy-list")) || [];

allbuy.forEach(function (el) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = el.name;
  let td2 = document.createElement("td");
  td2.innerText = el.actor;

  let td3 = document.createElement("td");
  td3.innerText = el.des;
  let td4 = document.createElement("td");
  td4.innerText = el.date;
  let td5 = document.createElement("td");
  td5.innerText = el.category;
  let td6 = document.createElement("td");
  td6.innerText = el.price;
  let td7 = document.createElement("td");

  tr.append(td1, td2, td3, td4, td5, td6);
  document.querySelector("tbody").append(tr);
});
