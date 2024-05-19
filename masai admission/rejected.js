// All the Code for the Rejected page goes here

let rejected = JSON.parse(localStorage.getItem("admission-rejected"));

rejected.forEach(function (el) {
  let ntr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = el.name;

  let td2 = document.createElement("td");
  td2.innerText = el.email;

  let td3 = document.createElement("td");
  td3.innerText = el.course;

  let td4 = document.createElement("td");
  td4.innerText = el.gender;

  let td5 = document.createElement("td");
  td5.innerText = el.number;
  ntr.append(td1, td2, td3, td4, td5);
  document.querySelector("tbody").append(ntr);
});
