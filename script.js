
//Animations for the fade ins 
const tl = gsap.timeline({ defaults: { ease: "power1.out"} });

tl.fromTo('.left-side', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.right-side', {opacity: 0}, {opacity: 2, duration: 1}, "-=1");
tl.fromTo('#projects-main', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");


// Animations for the logo
let logo = document.querySelector('.logo');

logo.addEventListener("mouseover", function() {
   TweenLite.to(".logo", 1, {rotation:"180_ccw"});
});

logo.addEventListener("mouseout", function() {
   TweenLite.to(".logo", 1, {rotation:"0_ccw"});
});
