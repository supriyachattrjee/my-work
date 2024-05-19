// All the Code for All Students Page Goes Here

let data = JSON.parse(localStorage.getItem("admission"));
run(data);
function run(students) {
  document.querySelector("tbody").innerText = "";
  students.forEach(function (el, i) {
    let ntr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.name;
    let td2 = document.createElement("td");
    td2.innerText = el.email;
    let td3 = document.createElement("td");
    td3.innerText = el.course;
    let td4 = document.createElement("td");
    td4.innerText = el.gender;
    let td5 = document.createElement("td");
    td5.innerText = el.number;
    let td6 = document.createElement("td");
    td6.innerText = "Accept";
    td6.addEventListener("click", function () {
      admit(el, i);
    });
    let td7 = document.createElement("td");
    td7.addEventListener("click", function () {
      reject(el, i);
    });
    td7.innerText = "Reject";
    ntr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(ntr);
  });

  function admit(el, index) {
    let admitData =
      JSON.parse(localStorage.getItem("admission-accepted")) || [];
    admitData.push(el);
    localStorage.setItem("admission-accepted", JSON.stringify(admitData));
    data.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(data));
    run(data);
  }

  function reject(el, index) {
    let rejectData =
      JSON.parse(localStorage.getItem("admission-rejected")) || [];
    rejectData.push(el);
    localStorage.setItem("admission-rejected", JSON.stringify(rejectData));
    data.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(data));
    run(data);
  }

  document.querySelector("#filter").addEventListener("change", filter);

  function filter() {
    let value = document.querySelector("#filter").value;
    if (
      value == "Web-Development" ||
      value == "Android-Development" ||
      value == "Data-Analitics"
    ) {
      let newdata = data.filter(function (el) {
        return el.course == value;
      });
      run(newdata);
    } else {
      run(data);
    }
  }
}
