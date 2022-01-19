const logo = document.querySelectorAll("#namelogo1 path");

for (let i = 0; i < logo.length; i++) {
  console.log(logo[i].getTotalLength());
}

setTimeout(function () {
  document.querySelector(".navbar").style.display = "flex";
  document.querySelector(".container").style.display = "block";
  document.querySelector(".about-me").style.display = "block";
  document.querySelector(".skills").style.display = "block";
  document.querySelector(".experience").style.display = "block";
  document.querySelector(".navbottom").style.display = "block";
  document.querySelector(".footer").style.display = "flex";
  document.querySelector("#namelogo").style.display = "none";
  document.querySelector("#namelogo1").style.display = "none";
  document.querySelector("#namelogo_1").style.display = "flex";
}, 8000);
