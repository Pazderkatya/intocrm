

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.clearScrollMemory('manual')

ScrollTrigger.create({
    trigger: ".hero",
    duration: 1,
    start: "top center", // Начало анимации при достижении этой точки
    end: "+=100",
    once: true,
    onEnter: () => new Typed('.second_row', {
        strings: ['просто, ^800 удобно, ^500 эффективно'],
        typeSpeed: 60,
    }),
});

gsap.to("#logo", {
    yPercent: 75,
    scale: 1.2,
    scrollTrigger: {
        trigger: ".hero",
        start: "top bottom", // the default values
        end: "bottom top",
        markers: true,
        scrub: true
    },
});


gsap.from(".number", {
    textContent: 0,
    duration: 2,
    ease: CustomEase.create("custom", "M0,0 C0,0 0.05,0.925 0.05,0.925 0.05,0.925 1,1 1,1 "),
    scrollTrigger: {
        trigger: ".benefit",
        start: "top center", // Начало анимации при достижении этой точки
        end: "+=100",
    },
    snap: { textContent: 1 },

});



gsap.to(".license_overflow", {
    rotationZ: 0,
    rotationX: 0,
    rotationY: 0,
    opacity: 1,
    y: 100,
    scrollTrigger: {
        trigger: ".license",
        start: "top center", // Начало анимации при достижении этой точки
        end: "50% center",
        scrub: true,
        once: true,
    },
});

// gsap.to(".license_card .first_row", {
//     x: 30,
//     scrollTrigger: {
//         trigger: ".license_text",
//         start: "700px 80%",
//         end: "100px", // Начало анимации при достижении этой точки
//         markers: true,
//         scrub: true
//     },
// });

gsap.to(".license_card .second_row", {
    x: -450,
    scrollTrigger: {
        trigger: ".license_text",
        start: "700px 80%",
        end: "100px", // Начало анимации при достижении этой точки
        scrub: true
    },
});


const swiper = new Swiper('.blog>.swiper', {
    slidesPerView: 3.3,
});
const swiper2 = new Swiper('.case>.swiper', {
    slidesPerView: 6.3,
    spaceBetween: 20,
});

