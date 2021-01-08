
document.addEventListener("scroll", () => {
    //console.log(window.scrollY ) // for web
    //console.log(window.scrollY>1850) // for mobile
    var isMobile = window.orientation > -1; 
    if(isMobile){
        if((window.scrollY >= 1850)){
            document.getElementById("navbar").style.backgroundColor = "white"
            document.getElementById("name").style.color = "black"
            document.getElementById("links1").style.color = "black"
            document.getElementById("links2").style.color = "black"
            document.getElementById("links3").style.color = "black"  
        }
        else{
            document.getElementById("navbar").style.backgroundColor = "black"
            document.getElementById("name").style.color = "white"
            document.getElementById("links1").style.color = "white"
            document.getElementById("links2").style.color = "white"
            document.getElementById("links3").style.color = "white"  
        }
    }
    else{
        if((window.scrollY > 1200)){
            document.getElementById("navbar").style.backgroundColor = "white"
            document.getElementById("name").style.color = "black"
            document.getElementById("links1").style.color = "black"
            document.getElementById("links2").style.color = "black"
            document.getElementById("links3").style.color = "black"  
        }
        else{
            document.getElementById("navbar").style.backgroundColor = "black"
            document.getElementById("name").style.color = "white"
            document.getElementById("links1").style.color = "white"
            document.getElementById("links2").style.color = "white"
            document.getElementById("links3").style.color = "white"  
        }
    }
})


