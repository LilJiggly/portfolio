console.log('ik ben gelinkt')

// var buttonLayover = document.getElementById("buttonMenu")
// var menuLau = document.getElementById("menu")
// var pijltje = document.getElementById("pijl")

// buttonLayover.onclick = test;

//             function test() {
//                 console.log("joden");
//                 menuLau.classList.toggle("active");
//                 buttonLayover.classList.toggle("activeButton");
                
//             };


var menuButton = document.getElementById("menuButton")
var menuScreen = document.getElementById("menuScreen")

menuButton.onclick = openMenu

function openMenu() {
    menuScreen.classList.toggle("active");
}