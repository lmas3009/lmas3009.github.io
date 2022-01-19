// document.addEventListener("scroll", () => {
//     console.log(window.scrollY) // for web
//     //console.log(window.scrollY>1850) // for mobile
//     var isMobile = window.orientation > -1;
//     if(isMobile){
//         if((window.scrollY >= 1850 && window.scrollY<=3310)){
//             document.getElementById("navbar").style.backgroundColor = "white"
//             document.getElementById("name").style.color = "black"
//             document.getElementById("links1").style.color = "black"
//             document.getElementById("links2").style.color = "black"
//             document.getElementById("links3").style.color = "black"
//         }

//         else{
//             document.getElementById("navbar").style.backgroundColor = "black"
//             document.getElementById("name").style.color = "white"
//             document.getElementById("links1").style.color = "white"
//             document.getElementById("links2").style.color = "white"
//             document.getElementById("links3").style.color = "white"
//         }
//     }
//     else{
//         if((window.scrollY > 1200 && window.scrollY < 1800)){
//             document.getElementById("navbar").style.backgroundColor = "white"
//             document.getElementById("name").style.color = "black"
//             document.getElementById("links1").style.color = "black"
//             document.getElementById("links2").style.color = "black"
//             document.getElementById("links3").style.color = "black"
//         }
//         else{
//             document.getElementById("navbar").style.backgroundColor = "black"
//             document.getElementById("name").style.color = "white"
//             document.getElementById("links1").style.color = "white"
//             document.getElementById("links2").style.color = "white"
//             document.getElementById("links3").style.color = "white"
//         }
//     }
// })

function OnclickOpenMenu() {
  document.getElementById("header").style.display = "flex";
  document.getElementById("close-menu").style.display = "block";
  document.getElementById("open-menu").style.display = "none";
}

function OnclickCloseMenu() {
  document.getElementById("header").style.display = "none";
  document.getElementById("close-menu").style.display = "none";
  document.getElementById("open-menu").style.display = "block";
}

const api_url = "https://api.github.com/users/lmas3009";

async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  document.getElementById("followcount").innerHTML = data["followers"];
  document.getElementById("repocount").innerHTML = data["public_repos"];
  document.getElementById("gistcount").innerHTML = data["public_gists"];
}
// Calling that async function
getapi(api_url);

const contactform = document.getElementById("contactform");

contactform.addEventListener("submit", (event) => {
  // stop form submission
  event.preventDefault();
  console.log(contactform["email"].value);
  console.log(contactform["subject"].value);
  window.open(
    "mailto:aravindkumae66@gmail.com?subject=Response from the portfolio&body=" +
      contactform["subject"].value +
      ", from the mailId " +
      contactform["email"].value
  );
});
