let totalMoney = localStorage.getItem("money");

document.querySelector("#wallet").innerHTML = totalMoney;

let apikey = "492eaf85";

async function search() {
  try {
    let value = document.querySelector("#search").value;
    let firstRes = await fetch(
      `http://www.omdbapi.com/?apikey=${apikey}&s=${value}`
    );
    let secondRes = await firstRes.json();
    console.log(secondRes.Search);
    show(secondRes.Search);
  } catch (error) {
    console.log(error);
  }
}

let movie = document.querySelector("#movies");
function show(data) {
  movie.innerHTML = null;

  data.forEach(({ Title, Poster, imdbID }) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = Poster;

    let p = document.createElement("p");
    p.innerText = Title;
    let button = document.createElement("button");
    button.innerText = "Book Now";
    button.addEventListener("click", () => {
      localStorage.setItem("id", imdbID);
      window.location.href = "checkout.html";
    });
    div.append(img, p, button);

    movie.append(div);
  });
}
let timer;
document.querySelector("#search").addEventListener("input", debouncing);

let id;
function debouncing() {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(search, 5000);
}
