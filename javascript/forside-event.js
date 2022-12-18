var imlocation = "images/";
function ImageArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) {
    this[i] = " ";
  }
}

image = new ImageArray(7);
image[0] = "sondag.png";
image[1] = "mandag.jpg";
image[2] = "tirsdag.jpg";
image[3] = "onsdag.jpg";
image[4] = "torsdag.jpg";
image[5] = "fredag.jpg";
image[6] = "lordag.png";
var currentdate = new Date();
var imagenumber = currentdate.getDay();
document.write(
  '<img src="' + imlocation + image[imagenumber] + '"class="center">'
);

{
  document.getElementById("test");
}
