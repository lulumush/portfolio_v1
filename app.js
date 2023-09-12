const nav = document.querySelector('.nav-left')
const navItems = document.querySelectorAll('.block-nav-item')

const btnNav = document.querySelector('.nav-button')
const btnContainer = document.querySelector('.button-container')

btnNav.addEventListener('click', () => {
    btnContainer.classList.toggle('active')
    nav.classList.toggle('nav-visible')
})

if (window.matchMedia('(max-width: 1300px)')) {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('nav-visible')
            btnContainer.classList.toggle('active')
        })
    })
}

//home section anim GSAP
const navbar = document.querySelector('.nav-left');
const btn = document.querySelectorAll('.home-btn')
const btnDown = document.querySelector('.arrow-down')

const timeLineHome = gsap.timeline()


timeLineHome
    .to(navbar, {
        left: 0,
    })
    .from("h1, h2, .home-btn, .home-socials-icon", {
        opacity: 0,
        y: -50,
        stagger: 0.1,
    })
    .from(btnDown, {
        opacity: 0,
        y: -50,
    }, "-=1")

window.addEventListener('load', () => {
    timeLineHome.play();
})


// anim on scroll
gsap.registerPlugin(ScrollTrigger)

// about section anim
const timeLineAbout = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: 'top 70%',
    }
})
timeLineAbout
    .from(".about h3, .about-text, .about-skills", {
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        stagger: 0.2,
    })
    .from(".about-interest h4, .about-interest-list-item", {
        opacity: 0,
        y: -20,
        duration: 0.2,
        stagger: 0.2,
    }, "-=2")

//projects section anim
const timeLineProjects = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        start: "top 70%"
    }
})
timeLineProjects
    .from(".projects h3, .projects-container", {
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
    })