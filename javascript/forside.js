const slideshow = [
  "images/billede 2.jpg",
  "images/vinstue-idag.jpg",
  "images/billede 5.jpg",
];
var i = 0;
function cambiarImagen() {
  var img = (document.slider.src = slideshow[i]);
  if (i < slideshow.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("cambiarImagen()", "5000");
}
window.onload = cambiarImagen;

/*******************/
/*
var imlocation = "images/";
function ImageArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) {
    this[i] = " ";
  }
}

image = new ImageArray(7);
image[0] = "søndag.jpg";
image[1] = "mandag.jpg";
image[2] = "tirsdag.jpg";
image[3] = "onsdag.jpg";
image[4] = "torsdag.jpg";
image[5] = "fredag.jpg";
image[6] = "lørdag.jpg";
var currentdate = new Date();
var imagenumber = currentdate.getDay();
document.write('<img src="' + imlocation + image[imagenumber] + '"class="center">');

{
  document.getElementById("dagensevent");
}
*/