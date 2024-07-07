import navbar from "./components/navbar.js";

document.querySelector("#nav").innerHTML = navbar();
import navbarstyle from "./style/navbarS.js";
document.querySelector("head>style").innerHTML = navbarstyle();
document.querySelector("#ytlgo").addEventListener("click", () => {
  window.location.assign("index.html");
});

document.querySelector("#search>button").addEventListener("click", async () => {
  try {
    const value = document.querySelector("#search>input").value;
    localStorage.setItem("search", value);
    const data =
      await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_g3LdYt9TiX6nrg4HRozajpU1LPteXQ4
          &part=snippet&q=${value}&maxResults=20`);
    const collect = await data.json();
    console.log(collect);
    const acdta = collect.items;

    add(acdta);
  } catch (error) {
    console.log(error);
  }
});

let cont = document.querySelector("#container");

function add(data) {
  cont.innerHTML = null;
  data.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement("div");
    let title = document.createElement("h3");
    title.innerText = snippet.title;
    let chanel = document.createElement("h3");
    chanel.innerText = snippet.channelTitle;
    let poster = document.createElement("img");
    poster.src = snippet.thumbnails.high.url;

    div.addEventListener("click", () => {
      const obj = { snippet, videoId, data };

      localStorage.setItem("clicked", JSON.stringify(obj));
      window.location.href = "video.html";
    });

    div.append(poster, title, chanel);
    cont.append(div);
  });
}
const sort = document.querySelector("#sort");
sort.addEventListener("change", sorting);

async function sorting() {
  let Sortvalue = sort.value;
  if (Sortvalue == "") {
    try {
      const value = document.querySelector("#search>input").value;
      const data =
        await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_g3LdYt9TiX6nrg4HRozajpU1LPteXQ4
            &part=snippet&q=${value}&maxResults=20`);
      const collect = await data.json();
      const acdta = collect.items;
      add(acdta);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const value = document.querySelector("#search>input").value;

      const data =
        await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_g3LdYt9TiX6nrg4HRozajpU1LPteXQ4
            &part=snippet&q=${value}&maxResults=20&order=${Sortvalue}`);
      const collect = await data.json();
      const acdta = collect.items;
      add(acdta);
    } catch (error) {
      console.log(error);
    }
  }
}
