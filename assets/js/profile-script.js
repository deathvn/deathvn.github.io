// Nav bar effects
var prevScrollpos = window.pageYOffset;
const topNav = document.querySelector(".navbar").offsetTop + window.innerHeight;
const sayori = document.querySelector(".nav-icon");
const sayoriHeight = sayori.offsetHeight;
const contactTop = document.querySelector(".contact-image").offsetTop;
window.onscroll = function() {
  // Nav hide and show
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bar").style.top = "0";
  } else {
    document.getElementById("bar").style.top = "-40px";
  }
  prevScrollpos = currentScrollPos;

  // Hanging Sayori
  if (currentScrollPos >= topNav && (sayoriHeight + currentScrollPos < contactTop)) {
    sayori.style.maxHeight = "500px";
  } else {
    sayori.style.maxHeight = "0";
  }
}

// Experiment Slide effects
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideList = document.querySelectorAll('.slide-in');

function effect() {
  slideList.forEach(function (item) {
    const slideAt = window.scrollY + window.innerHeight - item.offsetHeight/2;
    const itemBottom = item.offsetTop + item.offsetHeight;
    const halfShown = slideAt > item.offsetTop;
    const notPass = window.scrollY < itemBottom;
    if (halfShown && notPass) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(effect));

// Lazy load background image
window.onload=()=>{document.querySelector('.blue').classList.add('contact-image');}

// Mobile detect!
!function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    //console.log('Mobile detect!');
    const heroImg = document.querySelector('#myCover');
    const background = document.querySelector('.img-ground');
    heroImg.dataset.large="/assets/images/covers/purple_heart_by_ryuumabrunestud-dc17buw_mobile.jpg";
    //heroImg.style.setProperty('width', '100%');
    //heroImg.style.setProperty('height', 'auto');
    background.dataset.large="/assets/images/covers/nightcore-amzb3im_mobile.jpg";
  }
}()
