// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//function to be called onmouseover and onmouseout to change color of "hello world"

function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

let fade = document.getElementById("fade");
document.getElementById("mybtn").onclick = function(){
    fade.classList.toggle("fade");
}