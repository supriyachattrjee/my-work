import navbar from "./components/navbar.js";

document.querySelector("#nav").innerHTML = navbar();

import navbarstyle from "./style/navbarS.js";
document.querySelector("head>style").innerHTML = navbarstyle();

document.querySelector("#search>input").style.display = "none";
document.querySelector("#search").addEventListener("click", () => {
  window.location.href = "index.html";
});
document.querySelector("#ytlgo").addEventListener("click", () => {
  window.location.assign("index.html");
});

function clickVideo() {
  const {
    snippet: { title, channelTitle, description },
    videoId,
    data,
  } = JSON.parse(localStorage.getItem("clicked"));

  let iframe = document.querySelector("#videoInfo>iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?si=zdhXTEwLIVq4gBd-`;

  document.querySelector("#videoInfo>iframe+h2").innerText = title;
  document.querySelector(" #chanel>div:nth-child(1)>h3").innerText =
    channelTitle;
  document.querySelector("#videoInfo>#chanel+p").innerText = description;
  sugdata(videoId);
}
clickVideo();

async function sugdata(videoId) {
  try {
    const value = localStorage.getItem("search");

    const data =
      await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_g3LdYt9TiX6nrg4HRozajpU1LPteXQ4
              &part=snippet&q=${value}&maxResults=11`);
    const collect = await data.json();

    const acdta = collect.items;
    let newdata = acdta.filter(({ id: { videoId: vi } }) => {
      return videoId != vi;
    });
    sugetion(newdata);
  } catch (error) {
    console.log(error);
  }
}

function sugetion(data) {
  let sug = document.querySelector("#sugetion");
  sug.innerHTML = null;
  data.forEach(({ snippet, id: { videoId } }) => {
    let pdiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = snippet.thumbnails.medium.url;

    let cdiv = document.createElement("div");
    let tit = document.createElement("h3");
    tit.innerText = snippet.title;
    let chanelN = document.createElement("h4");
    chanelN = snippet.channelTitle;
    pdiv.addEventListener("click", () => {
      const obj = { snippet, videoId, data };

      localStorage.setItem("clicked", JSON.stringify(obj));
      window.location.href = "video.html";
    });
    cdiv.append(tit, chanelN);
    pdiv.append(img, cdiv);
    sug.append(pdiv);
  });
}
let sub = document.querySelector("#subscribe");
sub.style.backgroundColor = "black";

sub.addEventListener("click", () => {
  if (sub.style.backgroundColor == "black") {
    sub.style.backgroundColor = "red";
    sub.innerText = "Unsubscribe";
  } else {
    sub.style.backgroundColor = "black";
    sub.innerText = "Subscribe";
  }
});

let like = document.querySelector("#Rating>button:nth-child(1)");
let dislike = document.querySelector("#Rating>button:nth-child(2)");

dislike.addEventListener("click", () => {
  rating(2);
});

like.addEventListener("click", () => {
  rating(1);
});
like.style.color = "black";
dislike.style.color = "black";

function rating(num) {
  if (num == 1) {
    if (like.style.color == "black") {
      like.style.color = "blue";
      dislike.style.color = "black";
    } else if (like.style.color == "blue") {
      like.style.color = "black";
    }
  } else if (num == 2) {
    if (dislike.style.color == "black") {
      dislike.style.color = "blue";
      like.style.color = "black";
    } else if (dislike.style.color == "blue") {
      dislike.style.color = "black";
    }
  }
}
