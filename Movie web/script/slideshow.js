function slideshow() {
  let images = [
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5212/1545212-i-163a4ee38593",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/45/1707211870045-i",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3779/1553779-i-ed41b6853d74",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/258/1712304360258-i",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7340/1714178077340-i",
  ];

  let slide = document.querySelector("#slideshow");
  let img = document.createElement("img");
  img.src = images[0];
  slide.append(img);
  function intervel() {
    let i = 1;
    setInterval(function () {
      if (i == 5) {
        i = 0;
      }
      img.src = images[i];
      slide.append(img);

      i++;
    }, 5000);
  }
  intervel();
}
export default slideshow;
