var slider=document.getElementById("slider")
var slideCount=document.querySelectorAll(".slider-item")


const prev=document.querySelector(".prev")
const next=document.querySelector(".next")


let currentSlide=0;
next.onclick=function(){
    slideCount[currentSlide].style="opacity:0;visibility:hidden;"
    currentSlide=(currentSlide+1+slideCount.length)%slideCount.length
    slideCount[currentSlide].style="opacity:1;visibility:visible;"
}
prev.onclick=function(){
    slideCount[currentSlide].style="opacity:0;visibility:hidden;"
    currentSlide=(currentSlide-1+slideCount.length)%slideCount.length
    slideCount[currentSlide].style="opacity:1;visibility:visible;"
}
