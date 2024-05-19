// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit", store);

function store(event) {
  let form = document.querySelector("form");
  let data = JSON.parse(localStorage.getItem("admission")) || [];

  let obj = {
    name: form.name.value,
    email: form.email.value,
    number: form.phone.value,
    gender: form.gender.value,
    course: form.course.value,
  };
  console.log(obj);
  if (obj.name == "" || obj.email == "" || obj.number == "") {
    alert("plese fill all the section of this form");
  } else {
    data.push(obj);
  }

  localStorage.setItem("admission", JSON.stringify(data));
}
