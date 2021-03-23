function navSlide () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links  li ');
      
         burger.addEventListener('click', function () {
        //toggle nav 
        nav.classList.toggle('nav-active');
        //Animation liks
        navlinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
                
            } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
         });
         // Burger Animation
         burger.classList.toggle('toggel');
    });
}
navSlide();