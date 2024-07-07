const apikey = "j4vZTj45b1GsGkGXrlpiGB9lhPPAhdFt";

async function trendending() {
  try {
    let firstRes = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`
    );
    let secondRes = await firstRes.json();
    append(secondRes.data);
    console.log(secondRes.data);
  } catch (error) {
    console.log(error);
  }
}

trendending();
function append(data) {
  let gif = document.getElementById("gif");
  gif.innerHTML = null;

  data.forEach((el) => {
    let img = document.createElement("img");
    img.addEventListener("click", () => {
      ShowDetails(el.id);
    });
    img.src = el.images.fixed_height_small.url;
    gif.append(img);
  });
}

function ShowDetails(id) {
  localStorage.setItem("gifid", id);
  window.location.href = "gifDetails.html";
}

async function random() {
  try {
    let gif = document.getElementById("gif");
    gif.innerHTML = null;

    let firstRes = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apikey}&rating=g`
    );

    let secondRes = await firstRes.json();

    let img = document.createElement("img");

    img.addEventListener("click", () => {
      ShowDetails(secondRes.data.id);
    });
    img.src = secondRes.data.images.fixed_height_small.url;

    let p = document.createElement("p");
    p.innerText = secondRes.data.title;
    gif.append(p, img);
  } catch (error) {
    console.log(error);
  }
}

async function categories() {
  try {
    let gif = document.getElementById("gif");
    gif.innerHTML = null;

    let sort = document.getElementById("sorting");

    let button = document.createElement("button");
    button.innerText = "A-Z";
    let button2 = document.createElement("button");
    button2.innerText = "Z-A";

    let firstRes = await fetch(
      `https://api.giphy.com/v1/gifs/categories?api_key=${apikey}`
    );
    let secondRes = await firstRes.json();
    console.log(secondRes.data);
    run(secondRes.data);

    button.addEventListener("click", () => {
      gif.innerHTML = null;
      let acData = secondRes.data;
      acData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else return 0;
      });

      run(acData);
    });
    button2.addEventListener("click", () => {
      gif.innerHTML = null;
      let acData = secondRes.data;
      acData.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else if (a.name > b.name) {
          return -1;
        } else return 0;
      });
      run(acData);
    });
    sort.append(button, button2);

    function run(data) {
      data.forEach(
        ({
          gif: {
            images: {
              downsized: { url },
            },
          },
          name,
          gif: { id },
        }) => {
          let p = document.createElement("p");
          p.innerText = name;
          let img = document.createElement("img");
          img.addEventListener("click", () => {
            ShowDetails(id);
          });
          img.src = url;
          gif.append(p, img);
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

async function gif() {
  let value = document.querySelector("#search").value;
  if (value == "") {
    alert("type something in search box");
  } else {
    try {
      let firstRes = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=j4vZTj45b1GsGkGXrlpiGB9lhPPAhdFt&q=${value}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      let secondRes = await firstRes.json();
      console.log(secondRes.data);
      append(secondRes.data);
    } catch (error) {
      console.log(error);
    }
  }
}

async function translat() {
  let value = document.querySelector("#search").value;
  if (value == "") {
    alert("plese type in search box something");
  } else {
    try {
      let gif = document.getElementById("gif");
      gif.innerHTML = null;
      let firstRes = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=j4vZTj45b1GsGkGXrlpiGB9lhPPAhdFt&s=${value}&weirdness=4`
      );
      let secondRes = await firstRes.json();

      let img = document.createElement("img");
      img.addEventListener("click", () => {
        ShowDetails(secondRes.data.id);
      });
      img.src = secondRes.data.images.fixed_height_small.url;
      gif.append(img);
    } catch (error) {
      console.log(error);
    }
  }
}
