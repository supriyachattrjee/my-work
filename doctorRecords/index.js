// fill in javascript code here
document.querySelector("form").addEventListener("submit", doctor);

function doctor(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let docid = document.querySelector("#docID").value;
  let department = document.querySelector("#dept").value;
  let experience = document.querySelector("#exp").value;
  let mail = document.querySelector("#email").value;
  let mobile = document.querySelector("#mbl").value;

  let Ntr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = name;
  Ntr.append(td1);

  let td2 = document.createElement("td");
  td2.innerText = docid;
  Ntr.append(td2);

  let td3 = document.createElement("td");
  td3.innerText = department;
  Ntr.append(td3);

  let td4 = document.createElement("td");
  td4.innerText = experience;
  Ntr.append(td4);

  let td5 = document.createElement("td");
  td5.innerText = mail;
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
    td7.innerText = "Trainee";
  }
  Ntr.append(td7);

  let td8 = document.createElement("td");
  td8.innerText = "Delete";

  td8.style.backgroundColor = "red";
  td8.addEventListener("click", deleteEL);

  Ntr.append(td8);
  if (
    name == "" ||
    docid == "" ||
    department == "" ||
    experience == "" ||
    mail == "" ||
    mobile == ""
  ) {
    alert("Plese fill the every boxes in the form");
  } else {
    document.querySelector("tbody").append(Ntr);
  }

  document.querySelector("#name").value = "";
  document.querySelector("#docID").value = "";
  document.querySelector("#dept").value = "";
  document.querySelector("#exp").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#mbl").value = "";
}

function deleteEL(event) {
  event.target.parentNode.remove();
}
