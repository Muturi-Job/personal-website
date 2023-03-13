document.getElementById("about").addEventListener("mouseover", mouseOver);
document.getElementById("about").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("about").style.color = "red";
}

function mouseOut() {
  document.getElementById("about").style.color = "black";
}