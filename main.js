var typed = new Typed(".text", {
  strings: [
    "FrontEnd Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile App Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  clearInterval(autoSlide); // Detiene el autoplay cuando el usuario navega manualmente
  showSlides(slideIndex += n);
  autoSlide = setInterval(() => plusSlides(1), 5000); // Reinicia el autoplay
}

function currentSlide(n) {
  clearInterval(autoSlide);
  showSlides(slideIndex = n);
  autoSlide = setInterval(() => plusSlides(1), 5000);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Auto slide cada 5 segundos
var autoSlide = setInterval(() => plusSlides(1), 5000);
