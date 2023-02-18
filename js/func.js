const d = document

const userButton = d.getElementById('userButton')
const userMenu = d.getElementById('userMenu')
const mobileMenuButton = d.getElementById('mobileMenuButton')
const mobileMenu = d.querySelector('#mobileMenu')
const terms = d.querySelector('#terms')
const crearCuenta = d.querySelector('#crearCuenta')

function toggleMenu() {
    userMenu.classList.toggle('hidden')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden')
}

terms.addEventListener('change',()=>{
    if (terms.checked) {
        crearCuenta.disabled = false
    } else{
        crearCuenta.disabled = true
    }
})


const form = document.querySelector('#formRegister')
form.addEventListener('submit', (e, i) => {
  e.preventDefault()
  const v = []
  const formData = new FormData(form)
  for (const value of formData.values()) {
    v.push(value)
  }
  

  const formNuevoUsuario = new Usuarios(
    usuarioReg[usuarioReg.length - 1].idUsuario + 1,
    0,
    v[0],
    v[1],
    v[2],
    v[3]
  )
  formNuevoUsuario.insertarUsuario()


  
})