/*
var d = new Date();
var n = d.getDay();
var dagligeEvents = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'];

document.getElementById("title").innerHTML = dagligeEvents[n-1]; 
*/

var imlocation = "images/";
function ImageArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) {
    this[i] = " ";
  }
}
image = new ImageArray(7);
image[0] = "sunday.gif";
image[1] = "monday.gif";
image[2] = "tuesday.gif";
image[3] = "wednesday.gif";
image[4] = "thursday.gif";
image[5] = "friday.gif";
image[6] = "saturday.gif";
var currentdate = new Date();
var imagenumber = currentdate.getDay();
document.write('<img src="' + imlocation + image[imagenumber] + '">');
