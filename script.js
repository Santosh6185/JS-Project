const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('.nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header') 
}

window.addEventListener('scroll', shadowHeader)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href *=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }    
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay:250,

})

sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__dish`, {delay:450, distance:'100px', origin:'bottom'})
sr.reveal(`.home__burger`, {delay:1100, distance:'100px', duration:1400})
sr.reveal(`.home__ingredient`, {delay:1500, interval:100})
sr.reveal(`.recipe__img, .delivery__img, .contact__image`, {origin:'left'})
sr.reveal(`.recipe__data, .delivery__data, .contact__data`, {origin:'right'})
sr.reveal(`.popular__card`, {interval:100})