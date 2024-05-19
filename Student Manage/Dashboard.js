let student = JSON.parse(localStorage.getItem("students")) || [];
let tbody = document.querySelector("tbody");

run(student);
function run(items) {
  tbody.innerHTML = null;
  items.forEach(function (el, i) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    td1.append(img);
    let td2 = document.createElement("td");
    td2.innerText = el.name;

    let td3 = document.createElement("td");
    td3.innerText = el.course;

    let td4 = document.createElement("td");
    td4.innerText = el.unit;

    let td5 = document.createElement("td");
    td5.innerText = el.batch;

    let td6 = document.createElement("td");
    td6.addEventListener("click", function () {
      window.reloa;
      dl(el, i);
    });
    td6.innerText = "Delete";
    tr.append(td1, td2, td3, td4, td5, td6);
    tbody.append(tr);
  });
}

function dl(el, i) {
  student.splice(i, 1);
  localStorage.setItem("students", JSON.stringify(student));
  run(student);
  window.location.reload();
  let trash = JSON.parse(localStorage.getItem("trash")) || [];
  trash.push(el);
  localStorage.setItem("trash", JSON.stringify(trash));
}
