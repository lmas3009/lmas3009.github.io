const logo = document.querySelectorAll("#namelogo1 path");

for (let i = 0; i < logo.length; i++) {
  console.log(logo[i].getTotalLength());
}

setTimeout(function () {
  document.querySelector(".navbar").style.display = "block";
  document.querySelector(".container").style.display = "block";
  document.querySelector(".skilltoolcontainer").style.display = "block";
  document.querySelector(".projects").style.display = "block";
  document.querySelector(".navbottom").style.display = "block";
  document.querySelector(".footer").style.display = "block";
  document.querySelector(".intro").style.display = "block";
  document.querySelector(".blogs").style.display = "block";
  document.querySelector("#namelogo").style.display = "none";
  document.querySelector("#namelogo1").style.display = "block";
  document.querySelector(".experience").style.display = "block";
}, 8000);
