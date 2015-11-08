var logo = document.getElementById("logo");
var staticFish = document.getElementById("static");
var platter = document.getElementById("platter");
var fish = document.getElementById("fish");
var about = document.getElementById("about")


logo.addEventListener("click", function () {
  staticFish.setAttribute("class", "hidden");
  platter.removeAttribute("class", "hidden");
  fish.removeAttribute("class", "hidden");
  fish.setAttribute("class", "fish");
});

about.addEventListener("click", function(){
  fish.removeAttribute("class", "fish");
  fish.setAttribute("class", "hidden");
  platter.setAttribute("class", "hidden");
  staticFish.removeAttribute("class", "hidden");
});


