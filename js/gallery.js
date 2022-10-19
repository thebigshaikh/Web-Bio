

var slideIndex = 1;
  showSlides(slideIndex);

  document.addEventListener('keydown', function(e) {
    console.log(e)
    if (e.key === "ArrowLeft") {
        console.log("1");
        plusSlides(-1);
    } else if (e.key === "ArrowRight") {
        plusSlides(1);
    }
});

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
      slideIndex = 1
    }
    if(n < 1) {
      slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }

    if(slides.length>0){
        slides[slideIndex - 1].style.display = "block";
    }
    
  }

  

console.log("end");