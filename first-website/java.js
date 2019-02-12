 //preloader
 var cont =document.querySelector('.con');
 var loaderl = document.querySelector('.loader');
        function loadNow(opacity) {
            if(opacity <= 0) {
                displayContent();
            }
            else {
                loaderl.style.opacity = opacity;
                window.setTimeout(
                    loadNow(opacity - 1), 500);
            }
        }
     function displayContent() {
            loaderl.style.display = 'none';
            document.getElementById('con').style.display = 'inherit';
        }
        
//carousel
var slideIndex = 0;

function showSlides() {
  var i;
   var main = document.querySelector('.con');
  var slideshow = main.querySelector('.slideshow-container');
  var slides= slideshow.querySelectorAll('.mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000);
}
showSlides();


//for the button to the top
var topButton=document.querySelector('#back2Top');
function scrollFunction()
{
    if(document.body.scrollTop>20){topButton.style.display="block"}
    else{topButton.style.display="none"}
}
function topFunction()
{
    document.body.scrollTop = 0;
}
topButton.addEventListener('onclick' ,topFunction);
document.addEventListener('onscroll' ,scrollFunction);