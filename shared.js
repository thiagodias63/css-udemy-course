var backdrop = document.querySelector(".backdrop");
var closeButton = document.querySelector(".modal__action--negative");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

for (let index = 0; index < selectPlanButtons.length; index++) {
    selectPlanButtons[index].addEventListener('click', function() {
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}

function closeModal() {
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

ctaButton.addEventListener('animationstart', function(event){
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', function(event){
    console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', function(event){
    console.log('Animation intereted', event);
});