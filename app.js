const nav = document.querySelector('.nav-left')
const navItems = document.querySelectorAll('.block-nav-item')

const btnNav = document.querySelector('.nav-button')
const btnContainer = document.querySelector('.button-container')

btnNav.addEventListener('click', () => {
    btnContainer.classList.toggle('active')
    nav.classList.toggle('nav-visible')
})

if(window.matchMedia('(max-width: 1300px)')) {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('nav-visible')
            btnContainer.classList.toggle('active')
        })
    })
}

//home section anim GSAP
const navbar = document.querySelector('.nav-left');
const title = document.querySelector('h1');
const subTitle = document.querySelector('h2');
const btn = document.querySelectorAll('.home-btn')
const btnSocials = document.querySelectorAll('.home-socials-icon')
const btnDown = document.querySelector('.arrow-down')

const timeLineHome = gsap.timeline()

timeLineHome 
.to(navbar, {left: '0px'})
.from(title, {y:-50, opacity:0})
.from(subTitle, {y:-50, opacity:0}, "-=0.3")
.fromTo(btn, {opacity:0}, {opacity:1, stagger: 0.2}, "-=0.7")
.fromTo(btnSocials, {opacity:0}, {opacity:1, stagger: 0.2, delay: 0.2})
.from(btnDown, {y: -60, opacity:0},"-=1.5")

window.addEventListener('load', () => {
    timeLineHome.play();
})

// anim on scroll about
gsap.registerPlugin(ScrollTrigger)

// about section anim
const timeLineAbout = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: 'top center',
    }
})
timeLineAbout
.from(".about h3, .about-text", {
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    stagger:0.2,
})
.from(".about-interest h4, .about-interest-list-item", {
    opacity: 0,
    y: -20,
    duration: 0.4,
    stagger:0.2,
}, "-=1.5")

 //skills section anim
 const timeLineSkills = gsap.timeline({
    scrollTrigger: {
      trigger: ".skills",
      start:"top center"
    }
})
timeLineSkills
.from(".skills h3, .skills-card", {
    opacity: 0,
    delay: 0.4,
    stagger:0.2
})

//projects section anim
const timeLineProjects = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      start:"top center"
    }
})
timeLineProjects
.from(".projects h3, .projects-container", {
    opacity: 0,
    duration: 1.5,
    delay: 0.2,
})