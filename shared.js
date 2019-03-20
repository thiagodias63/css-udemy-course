var backdrop = document.querySelector(".backdrop");
var closeButton = document.querySelector(".modal__action--negative");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
// console.dir(backdrop) // show the backdrop props that can be manipulated
// console.dir(selectPlanButtons) // show the backdrop props that can be manipulated
// backdrop.style.display = 'block';

for (let index = 0; index < selectPlanButtons.length; index++) {
    selectPlanButtons[index].addEventListener('click', function() {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);

closeButton.addEventListener('click', closeModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}