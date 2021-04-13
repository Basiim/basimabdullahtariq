/// Menu Toggle
const toggleMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
toggleMenu('nav-toggle', 'nav-menu')

/// Active and remove active
const navLink = document.querySelectorAll('.navLink')

function linkAction() {

    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu on mobile after clicking nav link
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Loader 
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
tl.to('.intro', { opacity: 0, duration: 0, delay: 2 });
tl.to('.lds-grid', { display: none, duration: 2 }, '-=1'); */

/* Scroll Animations */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* Scroll home */
sr.reveal('.homeTitle', {})
sr.reveal('.homeImg', {})
sr.reveal('.homeSocialIcon', { delay: 200 })

/* Scroll About*/
sr.reveal('.aboutImg', {});
sr.reveal('.aboutSubtitle', { delay: 400 });
sr.reveal('.aboutText', { delay: 400 });
sr.reveal('.cv', { delay: 600 });

/* Scroll Work */
const sw = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
});
sw.reveal('.workImgFirst', { interval: 200 });
sw.reveal('.workImg', { interval: 400 });
sw.reveal('.workImgLast', { interval: 600 });

/* Scroll work heading in view */
gsap.registerPlugin(ScrollTrigger);
//while (1)
gsap.to(".workSubtitle", {
    scrollTrigger: {
        trigger: ".workSubtitle",
        start: "top center",
        end: "bottom 80px",
        scrub: true,
        pin: true,
        toggleActions: "restart pause reverse pause"
    },

    duration: 3
});

/* Animate work images */
gsap.to(".workImg", {
    scrollTrigger: {
        scrollTrigger: {
            trigger: ".workImg",
            start: "top center",
            end: "bottom 80px",
            scrub: true,
            markers: true,
            toggleActions: "restart pause reverse pause"
        },
        ease: 200,
        duration: 3
    }
})