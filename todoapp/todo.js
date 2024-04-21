document.querySelector("form").addEventListener("submit", work);

function work(event) {
  event.preventDefault();

  let prior = document.querySelector("#priority").value;
  let task_name = document.querySelector("#task").value;
  if (prior == "" || task_name == "") {
    alert("fill the form properly");
  } else {
    let tr_row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = task_name;
    tr_row.append(td1);
    let td2 = document.createElement("td");
    td2.innerText = prior;
    if (prior == "High") {
      td2.setAttribute("class", "rd");
    } else if (prior == "Low") {
      td2.setAttribute("class", "grn");
    }
    tr_row.append(td2);

    let td3 = document.createElement("td");
    td3.innerText = "Delete";
    td3.addEventListener("click", delete_el);
    tr_row.append(td3);
    document.querySelector("tbody").append(tr_row);
    document.querySelector("#priority").value = "";
    document.querySelector("#task").value = "";
  }
}

function delete_el(event) {
  event.target.parentNode.remove();
}
