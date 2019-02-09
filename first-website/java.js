 //preloader
 var loader;
        function loadNow(opacity) {
            if(opacity <= 0) {
                displayContent();
            }
            else {
                loader.style.opacity = opacity;
                window.setTimeout(function() {
                    loadNow(opacity - 0.75)
                }, 1000);
            }
        }
        
        function displayContent() {
            loader.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }
        
        document.addEventListener("DOMContentLoaded", function() {
            loader = document.getElementById('loader');
            loadNow(1);
        })
//carousel
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000);
}