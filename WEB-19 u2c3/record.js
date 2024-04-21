// fill in javascript code here
document.querySelector("form").addEventListener("submit", masai);

function masai(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let empID = document.querySelector("#employeeID").value;
  let dept = document.querySelector("#department").value;
  let experience = document.querySelector("#exp").value;
  let email = document.querySelector("#email").value;
  let mobile = document.querySelector("#mbl").value;

  let Ntr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = name;
  Ntr.append(td1);

  let td2 = document.createElement("td");
  td2.innerText = empID;
  Ntr.append(td2);

  let td3 = document.createElement("td");
  td3.innerText = dept;
  Ntr.append(td3);

  let td4 = document.createElement("td");
  td4.innerText = experience;
  Ntr.append(td4);

  let td5 = document.createElement("td");
  td5.innerText = email;
  Ntr.append(td5);

  let td6 = document.createElement("td");
  td6.innerText = mobile;
  Ntr.append(td6);

  let td7 = document.createElement("td");
  if (+experience > 5) {
    td7.innerText = "Senior";
  } else if (+experience <= 5 && +experience >= 2) {
    td7.innerText = "Junior";
  } else if (+experience < 2) {
    td7.innerText = "trainee";
  }
  Ntr.append(td7);

  let td8 = document.createElement("td");
  td8.innerText = "Delete";
  td8.setAttribute("class", "delete");
  td8.addEventListener("click", deleteEL);
  Ntr.append(td8);
  if (
    name == "" ||
    empID == "" ||
    dept == "" ||
    experience == "" ||
    email == "" ||
    mobile == ""
  ) {
    alert("Plese fillup the full form");
  } else {
    document.querySelector("tbody").append(Ntr);
  }

  document.querySelector("#name").value = "";
  document.querySelector("#employeeID").value = "";
  document.querySelector("#department").value = "";
  document.querySelector("#exp").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#mbl").value = "";
}

function deleteEL(event) {
  event.target.parentNode.remove();
}
