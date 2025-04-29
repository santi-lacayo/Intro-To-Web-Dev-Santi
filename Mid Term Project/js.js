//@sd5056@nyu.edu helped me with this part of the code
    var images = [
      document.getElementById("image1"),
      document.getElementById("image2"),
      document.getElementById("image3"), 
      document.getElementById("image4"), 
      document.getElementById("image5")
    ]; 

    for(i = )

    let current = 0;

    function toggleImages() {
      images[current].classList.add("hidden");
      images[current].classList.remove("spin");

    current = (current + 1) %images.length;

      images[current].classList.remove("hidden");
      images[current].classList.add("spin");
}

//the idea of this slideshow comes from: https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}