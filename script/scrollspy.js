const scrollSpy = () => {
	const navbar = document.querySelector('.main-nav');
	const header = document.querySelector('header');
	const animatedItems = document.querySelectorAll('.skills__item');

	if (!('IntersectionObserver' in window)) {
        console.log(55)
		animatedItems.forEach(item=> item.classList.add('appear'));
        navbar.classList.add('nav-scrolled');
        return;
	}

    const navScrollOptions = {
        rootMargin: '-100px',
    };
    
    const navScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
    }, navScrollOptions);
    
    const appearOptions = {
        threshold: 1
    };
    
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
    
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);
    
    navScrollObserver.observe(header);
    animatedItems.forEach((item) => appearOnScroll.observe(item));
};

export default scrollSpy;