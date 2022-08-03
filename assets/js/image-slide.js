/* EN - Used to slide images (screenshots) on the home page. */

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("carousel-image");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }    

    slides[slideIndex-1].style.display = "block";  

    setTimeout(showSlides, 5000); // Change image every 5 seconds
}