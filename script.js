function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("/header.html", "header");
    loadComponent("/footer.html", "footer");
});

function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error("Error loading " + file, error));
}


// Fullscreen Overlay Navigation
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0";
}

// Hero Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
