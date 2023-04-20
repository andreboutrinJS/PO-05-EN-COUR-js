// document.getElementsByClassName('arrows').addEventListener('click'); 
// function PlusSlide(){
// alert('Click');
// }

let slideIndex =1;
showSlides(slideIndex);


// THE ARROWS
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// DOTS
function currentSlide(n){
    showSlides(slideIndex = n);
}

// LES FONCTIONS
function showSlides(n){
let i;
// bloc image
let slides =document.getElementsByClassName('mySlides');
//the dots
let dots = document.getElementsByClassName('dot');

if(n > slides.length){ slideIndex =1}
if(n < 1) { slideIndex = slides.length} 

for(i =0; i < slides.length; i++) {  
slides[i].style .display ="none";
}


for(i=0; i<dots.length; i++){
 dots[i].className=dots[i].className.replace('active', '');
}
slides[slideIndex-1].style.display= " block"; 
dots[slideIndex-1].className += "  active";
}
