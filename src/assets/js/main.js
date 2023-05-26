const nav = document.querySelector('.nav')
const body = document.querySelector('.body')
const overlay = document.querySelector('.overlay')

// mobile menu open and close toggle
const mobileMenuToggle = () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
        body.style.overflow = 'unset'
        overlay.style.display = 'none'
    } else {
        nav.classList.add('show')
        body.style.overflow = 'hidden'
        overlay.style.display = 'block'
    }
}

// closing menu by clicking outside it
window.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('overlay')) {
        mobileMenuToggle()
    } 
})

// nav bar behavior on scrolling
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset

    if (currentScrollPosition >= 260) {
        nav.classList.add('scrolling-down')
        nav.classList.remove('scrolling-up')
    } else {
        nav.classList.add('scrolling-up')
        nav.classList.remove('scrolling-down')
    }
})