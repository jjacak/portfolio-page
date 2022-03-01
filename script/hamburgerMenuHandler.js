const navbar = document.querySelector('.main-nav');
const hamburgerIcon = document.querySelector('.hamburger-icon');


export const hamburgerClickHandler = () => {
	hamburgerIcon.classList.toggle('is-active');
	navbar.classList.toggle('show-menu');
};


export const hideMenuHandler = (e)=> {

    if(e.target===navbar || e.target===hamburgerIcon ||e.target.classList.contains('main-nav__list') || e.target.classList.contains('main-nav__item')){
        return;
    }
    navbar.classList.remove('show-menu');
    hamburgerIcon.classList.remove('is-active');
};


