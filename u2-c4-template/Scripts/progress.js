// Write code for the Progress page here

let progress = JSON.parse(localStorage.getItem("priority-list"));
run(progress);
function run(prog) {
  document.querySelector("tbody").innerText = "";

  prog.forEach(function (el, i) {
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
    let td6 = document.createElement("td");
    td6.addEventListener("click", function () {
      done(el, i);
    });
    td6.innerText = "Add";
    ntr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(ntr);
  });
}

function done(el, index) {
  let doneL = JSON.parse(localStorage.getItem("done-list")) || [];
  doneL.push(el);
  localStorage.setItem("done-list", JSON.stringify(doneL));

  progress.splice(index, 1);
  localStorage.setItem("priority-list", JSON.stringify(progress));
  run(progress);
}
