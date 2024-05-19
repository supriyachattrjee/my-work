// Write All `All Movies`  Page Script Here
let allmovie = JSON.parse(localStorage.getItem("movie-list")) || [];
let tbody = document.querySelector("tbody");
print(allmovie);

function print(data) {
  tbody.innerHTML = null;
  let totalMovie = 0;

  data.forEach(function (el, i) {
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
    td7.addEventListener("click", function () {
      addtobuy(el, i);
    });
    td7.innerText = "Buy";
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    tbody.append(tr);
    totalMovie++;
  });
  document.querySelector("#movie-count").innerText = totalMovie;
}

document.querySelector("#filter").addEventListener("change", function () {
  let value = document.querySelector("#filter").value;
  if (value == "") {
    print(allmovie);
  } else {
    let newdata = allmovie.filter(function (el) {
      return el.category == value;
    });
    print(newdata);
  }
});

function addtobuy(el, i) {
  let buy = JSON.parse(localStorage.getItem("buy-list")) || [];
  buy.push(el);
  localStorage.setItem("buy-list", JSON.stringify(buy));
  allmovie = allmovie.filter(function (element, index) {
    return i != index;
  });

  localStorage.setItem("movie-list", JSON.stringify(allmovie));
  print(allmovie);
}
