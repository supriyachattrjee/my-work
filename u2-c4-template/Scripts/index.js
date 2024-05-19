// Write code related to Home page here
document.querySelector("form").addEventListener("submit", store_task);

function store_task(e) {
  let task = JSON.parse(localStorage.getItem("task-list")) || [];
  let form = document.querySelector("form");
  let obj = {
    name: form.name.value,
    des: form.desc.value,
    Sdate: form.start.value,
    Edate: form.end.value,
    priority: form.priority.value,
  };
  task.push(obj);
  localStorage.setItem("task-list", JSON.stringify(task));
}
