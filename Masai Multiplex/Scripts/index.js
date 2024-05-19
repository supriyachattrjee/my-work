// Write All Home  Page Script Here
let form = document.querySelector("form");
form.addEventListener("submit", store);

function store() {
  let lsdata = JSON.parse(localStorage.getItem("movie-list")) || [];

  let obj = {
    name: form.name.value,
    actor: form.mainActor.value,
    des: form.desc.value,
    date: form.release.value,
    category: form.category.value,
    price: form.price.value,
  };
  if (
    obj.name == "" ||
    obj.actor == "" ||
    obj.des == "" ||
    obj.date == "" ||
    obj.category == "" ||
    obj.price == ""
  ) {
    alert("plese fill up the form properly");
  } else {
    lsdata.push(obj);
  }

  localStorage.setItem("movie-list", JSON.stringify(lsdata));
}
