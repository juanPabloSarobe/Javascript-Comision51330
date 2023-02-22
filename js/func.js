const d = document

/* Navbar */
const userButton = d.getElementById('userButton')
const userMenu = d.getElementById('userMenu')
const mobileMenuButton = d.getElementById('mobileMenuButton')
const mobileMenu = d.querySelector('#mobileMenu')
const navbarTitulo = d.querySelector('#navbarTitulo')
const searchDropdown = d.querySelector('#search-dropdown')
const searchOnMenu = d.querySelector('#searchOnMenu')


/* menu de usuario */
const menuItemsLogin = d.querySelector('#menuItemsLogin')
const menuItemsRegistrado = d.querySelector('#menuItemsRegistrado')


/* Register Form */
const email = d.querySelector('#email')
const usuExistente = d.querySelector('#usuExistente')
const registerForm = d.querySelector('#registerForm')
const formRegister = d.querySelector('#formRegister')
const terms = d.querySelector('#terms')
const crearCuenta = d.querySelector('#crearCuenta')

/* Login Form */
const logInForm = d.querySelector('#logInForm')
const logInBg = d.querySelector('#logInBg')
const emailLogin = d.querySelector('#emailLogin')
const passLogin = d.querySelector('#passwordLogin')
const formLogin = d.querySelector('#formLogin')
const usuLabel = d.querySelector('#usuLabel')
const usuIncorrecto = d.querySelector('#usuIncorrecto')

function toggleMenu() {
    userMenu.classList.toggle('hidden')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden')
}


emailLogin.addEventListener('input', () => {
    usuIncorrecto.classList.add('hidden')
})
passLogin.addEventListener('input', () => {
    usuIncorrecto.classList.add('hidden')
})
email.addEventListener('input', () => {
    usuExistente.classList.add('hidden')
})

function cerrarRegister() { registerForm.classList.add('hidden') }
function abrirRegister() { registerForm.classList.remove('hidden') }

function cerrarLogin() { logInForm.classList.add('hidden') }
function abrirLogin() { logInForm.classList.remove('hidden') }

logInBg.addEventListener('click', () => {
    cerrarLogin()
})

function deRegisterALogin() {
    cerrarRegister()
    abrirLogin()
}

function deLoginARegister() {
    cerrarLogin()
    abrirRegister()
}

function menuUsuToggle(){
    menuItemsLogin.classList.toggle('hidden')
    menuItemsRegistrado.classList.toggle('hidden')
}


searchDropdown.addEventListener('keyup',() => filtraPalabraClave(searchDropdown.value))

searchOnMenu.addEventListener('keyup', () => filtraPalabraClave(searchOnMenu.value))
searchDropdown.addEventListener('change',()=> toggleMobileMenu())

terms.addEventListener('change', () => {
    if (terms.checked) {
        crearCuenta.disabled = false
    } else {
        crearCuenta.disabled = true
    }
})

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    const v = []
    const formData = new FormData(formLogin)
    for (const value of formData.values()) {
        v.push(value)
    }

    const usuarioVerif = verifUsuario(v[0])

    if (!usuarioVerif) {
        usuIncorrecto.classList.remove('hidden')
        acceso = false
    } else {

        if (v[1] === usuarioReg[indexUsuEncontrado].password) {
            usuLabel.innerHTML = usuarioReg[indexUsuEncontrado].nombre
            usuLabel.classList.remove('hidden')
            navbarTitulo.classList.add('hidden')
            acceso = true
            cerrarLogin()
            menuUsuToggle()
            toast('success','Usuario identificado correctamente')
        } else {
            usuIncorrecto.classList.remove('hidden')
            acceso = false
        }
    }

})




formRegister.addEventListener('submit', (e) => {
    e.preventDefault()
    const v = []
    const formData = new FormData(formRegister)
    for (const value of formData.values()) {
        v.push(value)
    }

    if (!verifUsuario(v[0])) {
        crearNuevoUsuario(v)
        cerrarRegister()
        formRegister.reset()
        toast('success', 'Usuario creado correctamente')

    } else {
        usuExistente.classList.remove('hidden')
    }

})