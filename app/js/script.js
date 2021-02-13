const menuBtns = document.querySelectorAll('.hamberger__icon');
const nav = document.querySelector('.nav');


menuBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        btn.parentElement.classList.toggle('hamberger--active');
        nav.classList.toggle('nav--active');
    })
})


