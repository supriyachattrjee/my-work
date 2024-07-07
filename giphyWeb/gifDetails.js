document.querySelector("#home").addEventListener("click", () => {
  window.location.href = "HomePage.html";
});

async function gifInfo() {
  try {
    const id = localStorage.getItem("gifid");
    const apikey = "j4vZTj45b1GsGkGXrlpiGB9lhPPAhdFt";

    let firstRes = await fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${apikey}&rating=g`
    );
    let secondRes = await firstRes.json();
    let p = document.createElement("p");
    p.innerText = secondRes.data.title;
    let img = document.createElement("img");
    img.src = secondRes.data.images.original.url;
    document.body.append(p, img);
  } catch (error) {
    console.log(error);
  }
}
gifInfo();
