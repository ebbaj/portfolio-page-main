
//Animations for the fade ins 
const tl = gsap.timeline({ defaults: { ease: "power1.out"} });

tl.fromTo('.left-side', {opacity: 0}, {opacity: 1, duration: 1.5});
tl.fromTo('.right-side', {opacity: 0}, {opacity: 2, duration: 1.5}, "-=1.5");
tl.fromTo('#projects-main', {opacity: 0}, {opacity: 1, duration: 1.5}, "-=1.5");


// Animations for the logo
let logo = document.querySelector('.logo');

logo.addEventListener("mouseover", function() {
   TweenLite.to(".logo", 1, {rotation:"180_ccw"});
});

logo.addEventListener("mouseout", function() {
   TweenLite.to(".logo", 1, {rotation:"0_cw"});
});


//Footer template
/*
const template = document.getElementById('template');
const projectsTemplate = document.getElementById('projects-template');

const node = document.importNode(template.content, true);
document.body.appendChild(node);

let clone = template.content.cloneNode(true);
projectsTemplate.appendChild(clone);
document.body.appendChild(document.importNode(projectsTemplate.content, true));
*/

/*
const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);
*/

const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);
