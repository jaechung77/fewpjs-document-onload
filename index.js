document.addEventListener("DOMContentLoaded", function(){
    let p = document.getElementById("text")
    p.textContent = "This is really cool!"
})  

document.addEventListener("click", function(e){
    let p = document.getElementById("text")
    p.textContent = "JavaScript is so cool. It lets me add text to my page programmatically."    
})