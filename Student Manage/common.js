let stu = JSON.parse(localStorage.getItem("students")) || [];

let obj = {};
for (let i of stu) {
  obj[i["batch"]] = (obj[i["batch"]] || 0) + 1;
}
let txt = "";
let count = 0;
for (let i in obj) {
  if (count == 0) {
    txt += `Batch ${i} - ${obj[i]} `;
  } else {
    txt += `| Batch ${i} - ${obj[i]} `;
  }
  count++;
}
document.querySelector("h3").innerText = txt;
