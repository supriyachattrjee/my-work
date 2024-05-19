// Write code related to dashboard page here

let tasks = JSON.parse(localStorage.getItem("task-list"));

run(tasks);

function run(task) {
  document.querySelector("tbody").innerText = "";
  let total_task = 0;
  task.forEach(function (el, i) {
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
      priority(el, i);
    });
    td6.innerText = "Add";
    ntr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(ntr);
    total_task++;
  });
  document.querySelector("#task-count").innerText = total_task;
}

document.querySelector("#filter").addEventListener("change", filter);

function filter() {
  let value = document.querySelector("#filter").value;
  if (value == "Low" || value == "Medium" || value == "High") {
    let newTask = tasks.filter(function (el) {
      return el.priority == value;
    });
    run(newTask);
  } else {
    run(tasks);
  }
}

function priority(el, index) {
  let prioritys = JSON.parse(localStorage.getItem("priority-list")) || [];

  prioritys.push(el);
  localStorage.setItem("priority-list", JSON.stringify(prioritys));
  tasks.splice(index, 1);

  localStorage.setItem("task-list", JSON.stringify(tasks));
  run(tasks);
}
