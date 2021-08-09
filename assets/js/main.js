
// SMOOTHSCROLL
    const scroll = new SmoothScroll('.header__navbar a[href*="#"] .slider__scroll-button', {
        speed: 800
    }); 

// LOADING 
    $(window).load(function() {
        $('.loading').delay(800).fadeOut('fast', function() {
            $('body').removeClass('preloading');
        });
    });


// LOADING PAGE
    window.addEventListener('scroll', reveal);
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 100;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }


// refresh to top 
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }; 


// NAVBAR RESPONSIVE
    const navSlide = () => {
        const bars = document.querySelector('.navbar-mobile');
        const navMenu = document.querySelector('.header__navbar-list');
        const close = document.querySelector('.navbar-mobile-close');
        const navLink = document.querySelectorAll('.header__navbar-item');

        bars.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active')
        });

        close.addEventListener('click', () => {
            navMenu.classList.remove('nav-active')
        });


        navLink.forEach(n => n.addEventListener('click', () => {
            navMenu.classList.remove('nav-active')
        }));
    }
    navSlide();


// FIX BUG SAFARI
    $(window).scroll(function () {
        if ($(document).scrollLeft() != 0) {
            $(document).scrollLeft(0);
        }
    });
