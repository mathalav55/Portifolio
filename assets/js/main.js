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
})