
// SMOOTHSCROLL
    const scroll = new SmoothScroll('.header__navbar a[href*="#"]', {
        speed: 1500
    }); 
    const scroll2 = new SmoothScroll('.slider__scroll-button', {
        speed: 1500
    }); 

// LOADING 
    $(window).load(function() {
        $('.loading').delay(500).fadeOut('fast', function() {
            $('body').removeClass('preloading');
        });
    });


// LOADING SECTIONS
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

// Highlight Nav Menu on scroll 
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".header__navbar-item");
    window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("navbar-item--active");
        if (li.classList.contains(current)) {
        li.classList.add("navbar-item--active");
        }
    });
    });



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


// Fixed Nav after scroll
    $(document).ready(function() {
        $(window).scroll(function() {
        if($(this).scrollTop() > $(window).height()) { 
            $('#header').addClass('navbar-fixed');
        } else {
            $('#header').removeClass('navbar-fixed');
        }
        });
    });


// DARK THEME
    toggle = document.getElementById('toggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });

    
// FIX BUG SAFARI
    $(window).scroll(function () {
        if ($(document).scrollLeft() != 0) {
            $(document).scrollLeft(0);
        }
    });


