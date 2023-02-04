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