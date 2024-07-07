let walletBalence = localStorage.getItem("money");

document.querySelector("#wallet").innerText = walletBalence;

const idd = localStorage.getItem("id");

let apikey = "492eaf85";
async function myMMovie(id) {
  try {
    let firstRes = await fetch(
      `http://www.omdbapi.com/?apikey=${apikey}&i=${id}`
    );
    let secondRes = await firstRes.json();

    let h3 = document.createElement("h3");
    h3.innerText = secondRes.Title;
    let img = document.createElement("img");
    img.src = secondRes.Poster;

    document.querySelector("#movie").append(h3, img);
  } catch (error) {
    console.log(error);
  }
}
myMMovie(idd);

document.querySelector("button").addEventListener("click", () => {
  let name = document.querySelector("#user-name").value;
  let num = document.querySelector("#number_of_seats").value;
  if (name == "" || num == "") {
    alert("plese fill the boxes properly");
  } else {
    let ticketPrice = +num * 100;
    if (+walletBalence < ticketPrice) {
      document.querySelector("#booking_status").innerText =
        "Insufficient Balance !";
    } else {
      let afterBook = +walletBalence - ticketPrice;
      localStorage.setItem("money", afterBook);
      document.querySelector("#booking_status").innerText =
        "Booking Successful!";
      document.querySelector("#wallet").innerText = afterBook;
    }
  }
});
