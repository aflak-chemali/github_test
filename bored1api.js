fetch("https://api.chucknorris.io/jokes/random")
.then(response =>response.json())
.then (data=> document.getElementById("par").innerHTML = data.value)





let paragraph = document.getElementById("par");
paragraph.addEventListener("click", function() {
  this.classList.toggle("paused");
});