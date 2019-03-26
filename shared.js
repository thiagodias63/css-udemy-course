var backdrop = document.querySelector(".backdrop");
var closeButton = document.querySelector(".modal__action--negative");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
// console.dir(backdrop) // show the backdrop props that can be manipulated
// console.dir(selectPlanButtons) // show the backdrop props that can be manipulated
// backdrop.style.display = 'block';

for (let index = 0; index < selectPlanButtons.length; index++) {
    selectPlanButtons[index].addEventListener('click', function() {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    closeModal();
});

if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}

function closeModal() {
    backdrop.style.display = 'none';
    if (modal) {
        modal.style.display = 'none';
    }
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});
