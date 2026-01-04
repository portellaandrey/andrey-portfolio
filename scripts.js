document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const icon = mobileBtn.querySelector('i');
    const header = document.getElementById('header');

   const toggleMenu = () => {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
        icon.classList.replace('ph-list', 'ph-x');
    } else {
        icon.classList.replace('ph-x', 'ph-list');
    }
};
    mobileBtn.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) toggleMenu();
        });
    });

    window.addEventListener('scroll', () => {
        header.style.boxShadow =
            window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.4)' : 'none';
    });
});
