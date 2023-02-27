const d = document

/* Navbar */
const userButton = d.getElementById('userButton')
const userMenu = d.getElementById('userMenu')
const mobileMenuButton = d.getElementById('mobileMenuButton')
const mobileMenu = d.querySelector('#mobileMenu')
const navbarTitulo = d.querySelector('#navbarTitulo')
const searchNav = d.querySelector('#search-dropdown')
const searchOnMenu = d.querySelector('#searchOnMenu')
const formDropdown = d.querySelector('#formDropdown')
const formNavBar = d.querySelector('#formNavBar')
const modalBg = d.querySelector('#modalBg')
const botonCarrito = d.querySelector('#botonCarrito')




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
const rememberMe = d.querySelector('#remember-me')

/* Carrito de compras */
const menuCarrito = d.querySelector('#menuCarrito')
const cerrarCarrito = d.querySelector('#cerrarCarrito')
const modalBgCarrito = d.querySelector('#modalBgCarrito')
const itemsBotonCarrito = d.querySelector('#itemsBotonCarrito')
const sectionProductos = d.querySelector('#sectionProductos')
const subtotalDiv = d.querySelector('#subtotalDiv')
const totalDiv = d.querySelector('#totalDiv')


let usuarioRegistrado

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

function toogleCarrito(){
    menuCarrito.classList.toggle('hidden')
}

botonCarrito.addEventListener('click', ()=>toogleCarrito())
cerrarCarrito.addEventListener('click',()=> toogleCarrito())
modalBgCarrito.addEventListener('click',()=> toogleCarrito())

searchNav.addEventListener('keyup',(e) => {
    e.preventDefault()
    if (e.key != "Enter"){
        filtraPalabraClave(searchNav.value)
    }
})


formNavBar.addEventListener("submit", (e)=>{
    e.preventDefault()
    crearToastFiltro('filtro', 'filtrado por: '+ searchNav.value , 1000)
    searchNav.value = ""
})

searchOnMenu.addEventListener('keyup', () => filtraPalabraClave(searchOnMenu.value))

formDropdown.addEventListener("submit",(e)=> {    
    e.preventDefault()
    mobileMenu.classList.add('hidden')
    crearToastFiltro('filtro', 'filtrado por: '+ searchOnMenu.value , 1000)
    searchOnMenu.value =""
})


modalBg.addEventListener('click', (e) => {
    e.preventDefault
    toggleMobileMenu()
})

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
            registraUsuario(indexUsuEncontrado)
            
            cerrarLogin()
            toast('success','Usuario identificado correctamente')
        } else {
            usuIncorrecto.classList.remove('hidden')
            acceso = false
        }
    }

})



function registraUsuario(index) {
                
    usuEncontrado.idUsuario = usuarioReg[index].idUsuario
    usuEncontrado.email = usuarioReg[index].email
    usuEncontrado.nombre = usuarioReg[index].nombre
    usuEncontrado.apellido = usuarioReg[index].apellido
    usuEncontrado.pais = usuarioReg[index].pais
    usuEncontrado.localidad = usuarioReg[index].localidad
    usuEncontrado.estado = usuarioReg[index].estado
    
    muestraUsuarioRegistrado()
    rememberMe.checked ? localStorage.setItem('usuRegistrado', JSON.stringify(usuEncontrado)): ''

    if (rememberMe.checked){
        localStorage.setItem('usuRegistrado', JSON.stringify(usuEncontrado))
        carrito.usuario = usuEncontrado
        console.log(carrito)
        guardaCarrito()
    }else{
        carrito.usuario = usuEncontrado
        console.log(carrito)
    }

    acceso = true
}

function muestraUsuarioRegistrado(){
    usuLabel.innerHTML = usuEncontrado.nombre
    usuLabel.classList.remove('hidden')
    navbarTitulo.classList.add( 'hidden')
    menuUsuToggle()
}

function recuperaUsuarioRegistrado(){
    usuarioRegistrado = JSON.parse(localStorage.getItem('usuRegistrado'))
    if (usuarioRegistrado != null){
        usuEncontrado = usuarioRegistrado
        muestraUsuarioRegistrado()
    }
   
}

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