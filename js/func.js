const d = document

const userButton = d.getElementById('userButton')
const userMenu = d.getElementById('userMenu')
const mobileMenuButton = d.getElementById('mobileMenuButton')
const mobileMenu = d.querySelector('#mobileMenu')


/* Log in forms */

const logInForm = d.querySelector('#logInForm')
const logInBg = d.querySelector('#logInBg')

/* REgiuster Form */
const email = d.querySelector('#email')
const usuExistente = d.querySelector('#usuExistente')
const registerForm = d.querySelector('#registerForm')
const formRegister = d.querySelector('#formRegister')
const terms = d.querySelector('#terms')
const crearCuenta = d.querySelector('#crearCuenta')

function toggleMenu() {
    userMenu.classList.toggle('hidden')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden')
}

email.addEventListener('input', ()=>{
    usuExistente.classList.add('hidden')
})

function cerrarRegister() { registerForm.classList.add('hidden') }
function abrirRegister(){ registerForm.classList.remove('hidden')}

function cerrarLogin(){ logInForm.classList.add('hidden')}
function abrirLogin(){ logInForm.classList.remove('hidden')}

logInBg.addEventListener('click', ()=>{
    cerrarLogin()
})

function deRegisterALogin(){
    cerrarRegister()
    abrirLogin()
}

function deLoginARegister(){
    cerrarLogin()
    abrirRegister()
}

terms.addEventListener('change', () => {
    if (terms.checked) {
        crearCuenta.disabled = false
    } else {
        crearCuenta.disabled = true
    }
})


formRegister.addEventListener('submit', (e) => {
    e.preventDefault()
    const v = []
    const formData = new FormData(formRegister)
    for (const value of formData.values()) {
        v.push(value)
    }
   
    if (verifUsuario(v[0])){
        usuExistente.classList.remove('hidden')

    }else{
        crearNuevoUsuario(v)
        cerrarRegister()
        formRegister.reset()
        toast('success','Usuario creado correctamente')
    }
    
})