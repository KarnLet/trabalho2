///categories
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


////slide images
let currentSlide = 1;
let loop = true;
let slides; // Declaramos slides no escopo global

function prevSlide() {
  currentSlide -= 1;
  if (currentSlide < 1) {
    currentSlide = slides.length;
  }
  showSlides(currentSlide);
}

function nextSlide() {
  currentSlide += 1;
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }
  showSlides(currentSlide);
}

function showSlides(currentSlide) {
  let i;
  slides = document.querySelectorAll(".mySlides"); // Movemos a declaração para o escopo global
  let dots = document.querySelectorAll(".dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[currentSlide - 1].style.display = "block";
  dots[currentSlide - 1].classList.add("active");
}

// Call showSlides with currentSlide 1 when the page loads
window.addEventListener("load", function () {
  showSlides(currentSlide);
});

// Autoplay
function autoplay() {
  nextSlide();
}

setInterval(autoplay, 5000, loop);



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('aventura').addEventListener('click', function() {
  window.location.href = "adventure.html";
});
  

