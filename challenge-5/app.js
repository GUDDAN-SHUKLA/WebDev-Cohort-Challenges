// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carouselImages = document.getElementById('carouselTrack');
const captions = document.getElementById('caption');
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav")
const autoPlayButton = document.getElementById("autoPlayButton")
const timerDisplay = document.getElementById("timerDisplay")
// console.log(autoPlayButton);


let currentIndex = 0;
let autoPlayInterval;
let timerInterval;
let timers = 5;


function loadCarousels() {
  images.forEach((image, index) => {
    const images = document.createElement('img');
    images.classList.add("carousel-slide")
    images.src = image.url;
    carouselImages.appendChild(images);

    const sliderDots = document.createElement("div");
    sliderDots.classList.add("carousel-indicator")
    sliderDots.addEventListener("click",() => moveToSlide(index))
    carouselNav.appendChild(sliderDots)
    
  });
  upadateCarousel();
}

function upadateCarousel() {
  carouselImages.style.transform = ` translateX(${ -currentIndex * 100 }%)`;
 
   captions.innerText = images[currentIndex].caption
   document.querySelectorAll(".carousel-indicator")
   .forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex)})
}

function moveToSlide(index) {
  currentIndex = (index + images.length) % images.length;
  upadateCarousel();
  stopTimer();
}

nextButton.addEventListener("click", ()=> moveToSlide(currentIndex + 1))
prevButton.addEventListener("click", ()=> moveToSlide(currentIndex - 1))

function startAutoPlay() {
  autoPlayInterval = setInterval(() => moveToSlide(currentIndex + 1), 5000)
  startTimer();
  // console.log("Auto Play Started");
  autoPlayButton.innerText = "Stop Auto Play";
  autoPlayButton.onclick = stopAutoPlay;
}

function stopAutoPlay() {
  // console.log("Auto Play Stopped");
  clearInterval(autoPlayInterval);
  clearInterval(timerInterval);
  timerDisplay.innerText = "";
  autoPlayButton.innerText = "Start Auto Play";
  autoPlayButton.onclick = startAutoPlay;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timers--;
    // console.log("timers", timers);
    timerDisplay.innerText = `Next Slider in : ${timers} sec`;
    if (timers === 0) timers = 5 ;
  }, 1000)
}

function stopTimer() {
    // console.log("Timer Stopped", autoPlayInterval);
    if (autoPlayInterval) {
      clearInterval(timerInterval);
      startTimer();
    }
}

window.onload =  loadCarousels;
autoPlayButton.onclick = startAutoPlay;
