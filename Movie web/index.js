import navbar from "./components/navbar.js";
document.querySelector("#nav").innerHTML = navbar();
console.log(navbar());

import slideshow from "./script/slideshow.js";
slideshow();
let data = JSON.parse(localStorage.getItem("data")) || [];
data = [];
let imge = [
  "https://images.slivcdn.com/portrait_thumb/4671998507001.jpg?h=484&w=344&q=high",
  "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeh0hHjhBNBURBBAzg6o2PjDoTEv886p0vlMG6sD-ec9PlLtGMddESERRwUGnZAubKENt4L4j_iv16YZG5-ccygHqTMIw64HPr-5_SEJ-7JZg23o_IQ77ftlU-Go9mq_AQyQQdwaVdngdd-hrL-dhwSMa87gvN1ZdrVf5Ac0ClLfhv55iAVJEfWQ0stKT9PaE01siocrDdFZzQ-gqZ9Rg0l6bTB9iRxeFp3ri3MJjylXev4qx0U0ysKzk3tXQpEAWZ-178DB0vmez2dFsygS2Gy0YkxV.jpg?r=f75",
  "https://daex9l847wg3n.cloudfront.net/shemoutputimages/Maine-Pyar-Kiya/5cef7a7fa609d2036900002e/large_2_3_1713346995.jpg?1713794011",
  "https://i.ytimg.com/vi/tqgdlTbVSoE/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDP3RTJNWrsjOOb1BJicsk9dcYUxw",
  "https://assets.thehansindia.com/h-upload/2021/04/29/1073340-big-bull.webp",
  "https://bsmedia.business-standard.com/_media/bs/img/article/2023-03/05/full/1678023890-4522.jpg",
  "https://upload.wikimedia.org/wikipedia/en/f/f4/Mimi_2021_Hindi_poster.jpg",
  "https://qqcdnpictest.mxplay.com/pic/3a34615bd7a3e7b9a3b40d748063fe04/en/2x3/312x468/test_pic1597994765193.webp",
  "https://filmfare.wwmindia.com/content/2023/jul/must-watch-bollywood-movies-sholay1690804216.jpg",
];
let nam = [
  "piku",
  "shaitan",
  "maine pyar kiya",
  "zoram",
  "The Big Bull",
  "Pathan",
  "mimi",
  "Shiva",
  "Sholay",
];
let rate = [4.9, 4.5, 4.6, 4.1, 4.0, 3.5, 3.6, 3.7, 2.9];
for (let i = 0; i < imge.length; i++) {
  let name = nam[i];

  let image = imge[i];

  let rating = rate[i];
  let obj = { name, image, rating };

  data.push(obj);
}

localStorage.setItem("data", JSON.stringify(data));
let allMovie = document.querySelector("#allMovie");

let prom = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (data != null) {
      resolve(data);
    } else reject("404 error");
  }, 1000);
});

prom
  .then((result) => {
    run(result);
  })
  .catch((err) => {
    console.log(err);
  });

function run(allD) {
  document.querySelector("#loder").style.display = "none";
  allMovie.innerText = null;
  allD.forEach(function (el) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    let name = document.createElement("h3");
    name.innerText = el.name;
    let rating = document.createElement("h3");
    rating.innerText = el.rating;
    div.append(image, name, rating);
    allMovie.append(div);
  });
}
let ratings = document.querySelector("#ratingSort");
ratings.addEventListener("change", sort);
function sort() {
  let value = ratings.value;
  if (value == "") {
    newd = JSON.parse(localStorage.getItem("data"));
    run(newd);
  } else if (value == "ltoh") {
    data.sort(function (a, b) {
      return a.rating - b.rating;
    });
    run(data);
  } else if (value == "htol") {
    data.sort(function (a, b) {
      return b.rating - a.rating;
    });
    run(data);
  }
}
import navBut from "./script/navbarB.js";

navBut();
