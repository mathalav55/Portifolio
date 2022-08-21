// show menu

const navMenu = document.querySelector('#nav-menu'),
      navToggle =  document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close'),
      navLink = document.querySelectorAll('.nav-link');


if(navToggle){
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show-menu');
    })
}

// remove mobile menu
navLink.forEach(element => {
    element.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
});

// skills accordition

var skillsHeader = document.querySelectorAll('.skills-header');
var skillsContent = document.querySelectorAll('.skills-content');
function toggleSkills(){
    var itemClass = this.parentNode.className;
    skillsContent.forEach((el)=>{
        el.className = 'skills-content hide'
    });
    if( itemClass === 'skills-content hide')
        this.parentNode.className = 'skills-content'
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
});

// qualification 

var tabContents = document.querySelectorAll('.qualification-content');
var tabButtons  = document.querySelectorAll('.qualification-button');

tabButtons.forEach(el=>{
    el.addEventListener('click',()=>{
        var target = document.querySelector(el.dataset.target);
        tabContents.forEach((content)=>{
            content.classList.remove('active');
        });
        target.classList.add('active');

        tabButtons.forEach((content)=>{
            content.classList.remove('active');
        });
        el.classList.add('active')
    })
});

// modal

var modalViews = document.querySelectorAll('.services-modal');
var modalButtons = document.querySelectorAll('.services-button');
var closeBtns = document.querySelectorAll('.services-modal-close');

modal = function(i){
    modalViews[i].classList.add('active');
}

modalButtons.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i);   
    })  
})

closeBtns.forEach((closeBtn,i)=>{
    closeBtn.addEventListener('click',()=>{
        modalViews[i].classList.remove('active');
    })
})

// Swiper
let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop : true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

var swiper = new Swiper('.testimonial-container', {
    loop : true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination-testimonial',
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView:2
        }
    }
});

// Active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
}
window.addEventListener('scroll', scrollActive);
// change header
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

// show scroll top
function showScrollTop(){
    const scrollTop = document.querySelector('.scroll-up');
    if(this.scrollY >= 300) scrollTop.classList.add('show-scroll-top'); else scrollTop.classList.remove('show-scroll-top');
}
window.addEventListener('scroll', showScrollTop);

// dark theme
const themeButton = document.querySelector('.theme-icon')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// color theme
const coloricon = document.querySelector('.color-icon');
const r = document.querySelector(':root');
coloricon.addEventListener('click',()=>{
    const rs = getComputedStyle(r);
    let curColor = rs.getPropertyValue('--hue-color');
    curColor = parseInt(curColor);

    let randomColor = Math.floor(Math.random() * (360))

    while(randomColor == curColor){
        randomColor = Math.floor(Math.random() * (360));
    }
    r.style.setProperty('--hue-color',randomColor);
});
