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
let swiper = new Swiper(".portfolio-container", {
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