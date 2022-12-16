const slideshow = [
  "img/v2.jpg",
  "img/v1.jpg",
  "img/v3.jpg",
  "img/v4.jpg",
  "img/v5.jpg",
  "img/v6.jpg",
  "img/v7.jpg",
  "img/v8.jpg",
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
