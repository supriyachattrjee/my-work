document.querySelector("#addMoney").addEventListener("click", () => {
  let paisa = document.querySelector("#paisa").value;
  if (paisa == "") {
    alert("plese type some ammount");
  } else {
    let money = localStorage.getItem("money") || 0;
    let total = +money + +paisa;
    localStorage.setItem("money", total);
    document.querySelector("#showMoney").innerText = total;
  }
});
let wallet = localStorage.getItem("money");

document.querySelector("#showMoney").innerText = wallet || 0;
