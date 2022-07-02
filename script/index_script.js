var rates = document.getElementsByClassName("rating");
var submit = document.getElementById("submit");
var rating;
for (let rate of rates) {
  rate.onclick = () => {
    rating = rate.innerHTML;
  };
}
submit.onclick = () => {
    if (!rating) {
        rating = 1;
    }
    localStorage.setItem("RATE", rating);
    window.open("../thanks.html","_self");
};
