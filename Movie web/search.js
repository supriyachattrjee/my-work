import navbar from "./components/navbar.js";
document.querySelector("#nav").innerHTML = navbar();
document.querySelector("#search").style.display = "none";

import slideshow from "./script/slideshow.js";
slideshow();
let loder = document.querySelector("#loder");

async function searchMovie() {
  loder.style.display = "block";
  try {
    let value = document.querySelector("#sea>input").value;
    let data = await fetch(
      `http://www.omdbapi.com/?apikey=492eaf85&s=${value}`
    );
    let data1 = await data.json();
    appendM(data1.Search);
    console.log(data1.Search);
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("#sea>input").addEventListener("input", debouncing);

let id;

function debouncing() {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(searchMovie, 1000);
}

let information = document.querySelector("#info");
let Mdiv = document.querySelector("#movie");

function appendM(Mdata) {
  loder.style.display = "none";
  information.innerHTML = null;
  Mdiv.innerHTML = null;
  Mdata.forEach(function (el) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      info(el);
    });

    let img = document.createElement("img");
    img.src = el.Poster;
    let name = document.createElement("h3");
    name.innerText = el.Title;
    div.append(img, name);
    Mdiv.append(div);
  });
}
function info(el) {
  information.innerHTML = null;
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = el.Poster;
  let name = document.createElement("h3");
  name.innerText = el.Title;
  let year = document.createElement("h3");
  year.innerText = `Release Year :- ${el.Year}`;
  let type = document.createElement("h2");
  type.innerText = `Type :- ${el.Type}`;
  let imdbid = document.createElement("h4");
  imdbid.innerText = `IMDB-ID :- ${el.imdbID}`;
  div.append(img, name, year, type, imdbid);
  information.append(div);
}

import buttonfunc from "./script/navbarB.js";
buttonfunc();
