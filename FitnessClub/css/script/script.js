/*
    Student Name: Isiah Collins
    File Name: Script.Js
    Date: 04/10/2023

*/

//Global Varibles 
var video = document.getElementById("example");
var videoSource = document.elementFromId("vid-src");
var descrsource = document.getElementById("despsrc")

//Hambuger nenu function
function hamburger(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc.logo");
    // if the display style of the menu is block AND 
    // the logo display is none
    if (menu.style.display== "block" && logo.style.display === "none")
    {
         //if both statements are true 
         menu.style.display = "none";
         logo.style.display = "block";
    }
    else{
        //if one of the statements or both is false
         menu.style.display = "block";
         logo.style.display = "none";
    }
}
//Fucntion to display the burpees example video
function Burpees(){
    videoSource.src = "media/burpees.mp4";
    descrsource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.onload()
}
function plank(){
    videoSource.src = "media/plank.mp4";
    descrsource.src = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.onload()
}
function mountain(){
    videoSource.src = "media/mc.mp4";
    descrsource.src = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.onload()
}
function discount(){
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START"
    promo.style.color = "#ff000";
    promo.style.fontSize = "2em"

}


