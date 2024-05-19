// Write code related to Done page here
let done = JSON.parse(localStorage.getItem("done-list"));

done.forEach(function (el) {
  let ntr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = el.name;
  let td2 = document.createElement("td");
  td2.innerText = el.des;
  let td3 = document.createElement("td");
  td3.innerText = el.Sdate;
  let td4 = document.createElement("td");
  td4.innerText = el.Edate;
  let td5 = document.createElement("td");
  td5.innerText = el.priority;

  ntr.append(td1, td2, td3, td4, td5);
  document.querySelector("tbody").append(ntr);
});
