let submit = document.querySelector(".submit");
// let rate = document.querySelectorAll(".rating-button .ratings .rating");
let rating = document.querySelectorAll(".ratings li");
let score = 3; //document.querySelector(".test").textContent;

rating.forEach(function (item) {
  item.onclick = function (e) {
    score = this.innerText;
  };
});

submit.addEventListener("click", function () {
  document.querySelector(".my-rating").textContent = score;
  document.querySelector(".rating-state").classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
});
