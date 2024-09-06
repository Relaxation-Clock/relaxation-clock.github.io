const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const pause_btn = document.querySelector('#pause_btn');
const reset_btn = document.querySelector('#reset_btn');
let time = 0,
  interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
  interval = setInterval(showTime, 1000);
  hideBtn([start_btn]);
  showBtn([pause_btn, reset_btn]);
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pause_btn.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    pause_btn.innerHTML = 'PAUSE';
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  pause_btn.innerHTML = 'PAUSE';
  time = 0;
  timer.innerHTML = toHHMMSS(time);
  hideBtn([pause_btn, reset_btn]);
  showBtn([start_btn]);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}

function showBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}

reset()

const img = document.getElementById('ihtl');

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const moveX = 0-(((mouseX / window.innerWidth - 0.5) * 70 - 30)+500);
    const moveY = 0-((mouseY / window.innerHeight - 0.5) * 70)-30;

    // Apply transform with limited movement for both x and y
    img.style.transform = `translate(${moveX}px, ${moveY}px)`; 
});


const d = new Date();
let minutecheck = 0
let hour = d.getHours();
let minute = d.getMinutes();

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;

 
  document.getElementById('clock').textContent = timeString;
}

updateTime()
setInterval(updateTime, 1000);

var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg" , "image6.jpg" , "image7.jpg" , "image8.jpg" , "image9.jpg" , "image10.jpg"];
var preloadedImages = [];
var currentIndex = 0;

// Function to preload all images
function preloadImages() {
  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i];
    preloadedImages.push(img);
  }
}

// Change image function
function needSleep() {
  var imgElement = document.getElementById("ihtl");
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
}

// Preload all images when the page loads
window.onload = function() {
  preloadImages();
};

needSleep();
