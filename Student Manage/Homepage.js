document.querySelector("form").addEventListener("submit", add);
let db = JSON.parse(localStorage.getItem("students")) || [];
let form = document.querySelector("form");
function add(event) {
  function create() {
    this.name = form.name.value;
    this.course = form.course.value;
    this.unit = form.unit.value;
    this.image = form.image.value;
    this.batch = form.batch.value;
  }
  if (
    form.name.value == "" ||
    form.course.value == "" ||
    form.unit.value == "" ||
    form.image.value == "" ||
    form.batch.value == ""
  ) {
    alert("plese fill the form poperly");
  } else {
    let obj = new create();
    db.push(obj);
  }

  localStorage.setItem("students", JSON.stringify(db));
  console.log(db);
  localStorage.removeItem("db");
}
