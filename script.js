const navItems = document.querySelector('.nav-items')
const featuresNav = document.querySelector('.features-nav-item')
const featuresDropdown = document.querySelector('.features-dropdown')
const companyNav = document.querySelector('.company-nav-item')
const companyDropdown = document.querySelector('.company-dropdown')
const downArrowf = document.querySelector('.features')
const downArrowc = document.querySelector('.company')

featuresNav.addEventListener('click', () => {
    featuresDropdown.classList.toggle('expand')
    downArrowf.classList.toggle('expand')
})

companyNav.addEventListener('click', () => {
    companyDropdown.classList.toggle('expand')
    downArrowc.classList.toggle('expand')
})

document.addEventListener('click', (event) => {
    if (!navItems.contains(event.target)) {
        featuresDropdown.classList.remove('expand')
        downArrowf.classList.remove('expand')
        companyDropdown.classList.remove('expand')
        downArrowc.classList.remove('expand')
    }
})

const mobileNav = document.querySelector('.mobile-nav')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')

menuIcon.addEventListener('click', () => {
    mobileNav.classList.add('active')
})

closeIcon.addEventListener('click', () => {
    mobileNav.classList.remove('active')
})

const featuresNavMobile = document.querySelector('.features-nav-mobile')
const companyNavMobile = document.querySelector('.company-nav-mobile')
const arrowMobileF = document.querySelector('.features-mobile')
const arrowMobileC = document.querySelector('.company-mobile')
const featuresDropdownMobile = document.querySelector('.features-dropdown-mobile')
const companyDropdownMobile = document.querySelector('.company-dropdown-mobile')

featuresNavMobile.addEventListener('click', () => {
    featuresDropdownMobile.classList.toggle('active')
    arrowMobileF.classList.toggle('active')
})

companyNavMobile.addEventListener('click', () => {
    companyDropdownMobile.classList.toggle('active')
    arrowMobileC.classList.toggle('active')
})