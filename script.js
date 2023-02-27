const overlay = document.querySelector('#overlay');
const navItems = document.querySelectorAll('nav li');
const menuBars = document.querySelector('#menu-bars');
const sectionHome = document.querySelector('#home');
const sectionAbout = document.querySelector('#about');
const sectionSkills = document.querySelector('#skills');
const sectionProjects = document.querySelector('#projects');
const sectionContact = document.querySelector('#contact');

// Arrays for slide in and slide out animations
const slideInClasses = ["slide-in-1", "slide-in-2", "slide-in-3", "slide-in-4", "slide-in-5"];
const slideOutClasses = ["slide-out-1", "slide-out-2", "slide-out-3", "slide-out-4", "slide-out-5"];


function displayMenu() {
    // Slide in animation
    if (overlay.classList.contains('overlay-slide-left')) {
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
        navItems.forEach((item, index) => {
            item.classList.remove(slideOutClasses[index]);
            item.classList.add(slideInClasses[index]);
        });
    }
    // Slide out animation
    else {
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
        navItems.forEach((item, index) => {
            item.classList.remove(slideInClasses[index]);
            item.classList.add(slideOutClasses[index]);
        });
    }
}

function referencePage() {
    // Slide out animation
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navItems.forEach((item, index) => {
        item.classList.remove(slideInClasses[index]);
        item.classList.add(slideOutClasses[index]);
    });
}

menuBars.addEventListener('click', displayMenu);
navItems.forEach((nav) => {
    nav.addEventListener('click', referencePage);
})