const slider_next=document.getElementById("div1-slider-shifter");
const slider_prev=document.getElementById("div2-slider-shifter");
slider_next.addEventListener("click", ()=>{ setSlide(1); });   //calling function setSlides and paasing num=1
slider_prev.addEventListener("click", ()=>{ setSlide(-1); });  //calling function setSlides and paasing num=-1

//initializing slider
var currentIndex = 1;
displaySlide(currentIndex);

function setSlide(num) {
    displaySlide(currentIndex += num);
}

function displaySlide(num) {
    let slides = document.getElementsByClassName("slider-images");  //retrieving all the elements with this class
    //implementing basic logic
    if (num > slides.length) { currentIndex = 1 }  //condition for clicking next on last slider image
    else if (num < 1) { currentIndex = slides.length }  //condition for clicking prev on first slider image
    for (let x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex-1].style.display = "block";
}