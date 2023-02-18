const d = document

const userButton = d.getElementById('userButton')
const userMenu = d.getElementById('userMenu')
const mobileMenuButton = d.getElementById('mobileMenuButton')
const mobileMenu = d.querySelector('#mobileMenu')

function toggleMenu() {
    userMenu.classList.toggle('hidden')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden')
}

