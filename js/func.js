

/* En este archivo se maneja las vinculaciones con el DOM */
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
const ItemCerrarSesion = d.querySelector('#ItemCerrarSesion')

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
const sinEnvio = d.querySelector('#sinEnvio')
const conEnvio = d.querySelector('#conEnvio')
const btnSeguirComprando = d.querySelector('#btnSeguirComprando')
const btnFinCompra = d.querySelector('#btnFinCompra')
const carritoVacio = d.querySelector('#carritoVacio')
const sectionCarritoTotales = d.querySelector('#sectionCarritoTotales')

/* Checkout */

const cerrarCheckout = d.querySelector('#cerrarCheckout')
const checkout = d.querySelector('#checkout')
const modalBgCheckout = d.querySelector('#modalBgCheckout')
const accordionCollapseTitle = d.querySelector('#accordionCollapseTitle')
const accordionCollapseBody = d.querySelector('#accordionCollapseBody')
const accordionTitleIcon = d.querySelector('#accordionTitleIcon')
const sectionProductosCheckout = d.querySelector('#sectionProductosCheckout')
const subtotalDivChechout = d.querySelector('#subtotalDivChechout')
const envioDivCheckout = d.querySelector('#envioDivCheckout')
const totalDivCheckout = d.querySelector('#totalDivCheckout')
const accordionTitlePrecio = d.querySelector('#accordionTitlePrecio')
const accordionTitlePagos1 = d.querySelector('#accordionTitlePagos1')
const accordionTitlePagos2 = d.querySelector('#accordionTitlePagos2')
const accordionTitlePagos3 = d.querySelector('#accordionTitlePagos3')
const accordionTitlePagosIcon1 = d.querySelector('#accordionTitlePagosIcon1')
const accordionTitlePagosIcon2 = d.querySelector('#accordionTitlePagosIcon2')
const accordionTitlePagosIcon3 = d.querySelector('#accordionTitlePagosIcon3')
const accordionBodyPagos1 = d.querySelector('#accordionBodyPagos1')
const accordionBodyPagos2 = d.querySelector('#accordionBodyPagos2')
const accordionBodyPagos3 = d.querySelector('#accordionBodyPagos3')
const yaTieneCuenta = d.querySelector('#yaTieneCuenta')

const formCheckout = d.querySelector('#formCheckout')
const checkoutEmail = d.formCheckout.emailCheckout
const checkoutNombre = d.formCheckout.nombreCheckout
const checkoutApellido = d.formCheckout.apellidoCheckout
const checkoutPais = d.formCheckout.PaisCheckout
const checkoutProvincia = d.formCheckout.provinciaCheckout
const checkoutLocalidad = d.formCheckout.localidadCheckout
const checkoutDireccion = d.formCheckout.direccionCheckout

const formTarjeta = d.querySelector('#formTarjeta')
const inputsTarjeta = d.getElementsByName('inputTarjeta')


const pagarTarjeta = d.querySelector('#pagarTarjeta')
const pagarTransferencia = d.querySelector('#pagarTransferencia')
const pagarMercadoPago = d.querySelector('#pagarMercadoPago')



const contenedor = d.getElementById("zonaProductos");
const seccionCategorias = d.querySelector("#seccionCategorias")
const catSelected = d.getElementsByClassName("catSelected")

function toogleCheckout() {checkout.classList.toggle('hidden')}

function carritoLleno(){
    sectionCarritoTotales.classList.remove('hidden')
    carritoVacio.classList.remove('flex')
    carritoVacio.classList.add('hidden')
}
function carritoVaciado(){
    sectionCarritoTotales.classList.add('hidden')
    carritoVacio.classList.add('flex')
    carritoVacio.classList.remove('hidden')
}

function toogleCarritoYTotales(){

    if(carrito.items === 0 ){
        carritoVaciado()
    }else if(carrito.items >= 1){
        carritoLleno()
    }
   
}

cerrarCheckout.addEventListener('click',()=>{
    toogleCheckout()
})
modalBgCheckout.addEventListener('click',()=>{
    toogleCheckout()
})

function toogleaccordionCollapseBody(){accordionCollapseBody.classList.toggle('hidden')}
function toogleAccordionTitleIcon(){accordionTitleIcon.classList.toggle('rotate-180')}

accordionCollapseTitle.addEventListener('click', ()=>{
    toogleaccordionCollapseBody()
    toogleAccordionTitleIcon()
    
})

function toogleAccordionBodyPagos1(){accordionBodyPagos1.classList.toggle('hidden')}
function toogleAccordionBodyPagos2(){accordionBodyPagos2.classList.toggle('hidden')}
function toogleAccordionBodyPagos3(){accordionBodyPagos3.classList.toggle('hidden')}
function toogleAccordionTitlePagos1(){accordionTitlePagos1.classList.toggle('hidden')}
function toogleAccordionTitlePagos2(){accordionTitlePagos2.classList.toggle('hidden')}
function toogleAccordionTitlePagos2RoundedT(){accordionTitlePagos2.classList.toggle('rounded-t-xl')}
function toogleAccordionTitlePagos3(){accordionTitlePagos3.classList.toggle('hidden')}
function toogleAccordionTitlePagos3RoundedB(){accordionTitlePagos3.classList.toggle('rounded-b-xl')}
function toogleAccordionTitlePagos3RoundedT(){accordionTitlePagos3.classList.toggle('rounded-t-xl')}
function toogleAccordionTitlePagosIcon1(){accordionTitlePagosIcon1.classList.toggle('-rotate-90')}
function toogleAccordionTitlePagosIcon2(){accordionTitlePagosIcon2.classList.toggle('-rotate-90')}
function toogleAccordionTitlePagosIcon3(){accordionTitlePagosIcon3.classList.toggle('-rotate-90')}
function toogleyaTieneCuenta(){yaTieneCuenta.classList.toggle('hidden')}

function requiredTarjeta(){
    inputsTarjeta.forEach((e)=>{
        if(e.required == false){
            e.required = true
        }else{
            e.required = false
        }
    })
}

accordionTitlePagos1.addEventListener('click', ()=>{
    toogleAccordionBodyPagos1()
    toogleAccordionTitlePagosIcon1()
    toogleAccordionTitlePagos2()
    toogleAccordionTitlePagos3()
    requiredTarjeta()
})
accordionTitlePagos2.addEventListener('click', ()=>{
    toogleAccordionBodyPagos2()
    toogleAccordionTitlePagosIcon2()
    toogleAccordionTitlePagos1()
    toogleAccordionTitlePagos3()
    toogleAccordionTitlePagos2RoundedT()
})
accordionTitlePagos3.addEventListener('click', ()=>{
    toogleAccordionBodyPagos3()
    toogleAccordionTitlePagosIcon3()
    toogleAccordionTitlePagos2()
    toogleAccordionTitlePagos1()
    toogleAccordionTitlePagos3RoundedB()
    toogleAccordionTitlePagos3RoundedT()
})



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
btnSeguirComprando.addEventListener('click',()=> toogleCarrito())
btnFinCompra.addEventListener('click',()=> { 
    toogleCheckout()
    toogleCarrito()
    if(usuEncontrado.idUsuario!=""){
        carrito.usuario = usuEncontrado
        guardaCarrito()
    }
    cargaUsuarioRecuperado(usuEncontrado)
    
})

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

searchOnMenu.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.key != "Enter"){
    filtraPalabraClave(searchOnMenu.value)
    }

})

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

formCheckout.addEventListener('submit',(e)=>{
    e.preventDefault()
    let submitter = e.submitter;
    let handler = submitter.id;
    let msjExtra
    handler == 'pagarTarjeta'? msjExtra = 'Usted esta a punto de pagar con tarjeta de credito': ""
    handler == 'pagarTransferencia'? msjExtra = `Usted esta a punto de pagar con transferencia electrónica. Los datos bancarios serán enviados por correo`: ""
    handler == 'pagarMercadoPago'? msjExtra = `Usted esta a punto de pagar con MercadoPago, en breve será redireccionado al link de pago para abonar su compra`: ""
    pagarCompra(msjExtra)

    const formData = new FormData(formCheckout);
    formData.append('service_id', 'service_ru60x72');
    formData.append('template_id', 'template_ooiwkup');
    formData.append('user_id', 'wiS8yxAfMqiYyC9ID');
    formData.append('carritoTotal', `${carrito.total}`);
    formData.append('carritoEnvio', `${carrito.costoEnvio}`);
    formData.append('carritoTotalMasEnvio', `${carrito.costoEnvio + carrito.total}`);
    formData.append('carritoItems', `${carrito.items}`);
    formData.append('carritoIdCarrito', `${carrito.idCarrito}`);
    let totalProductos = ""
    carrito.contenidoCarrito.forEach((prod)=>{
            totalProductos += `${prod[0].nombreProd} x ${prod[1]} unidades
            `
        })
    formData.append(`productos`, `${totalProductos}`);
    let tieneEnvio
    if (carrito.costoEnvio === 0){
        tieneEnvio = 'A retirar por sucursal'
    }else{
        tieneEnvio = `Con envío a ${formData.get('PaisCheckout')}, ${formData.get('ProvinciaCheckout')}, ${formData.get('LocalidadCheckout')}, ${formData.get('DireccionCheckout')}.`
    }
    formData.append('tieneEnvio', `${tieneEnvio}`);
    

    
    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
           
        } else {
            throw new Error('Oops... ' + response.statusText);
        }
    })
    .catch(function(error) {
        alert(error);
    });
      
})


function pagarCompra(msjExtra){
    Swal.fire({
        title: 'Felicitaciones por su compra',
        text: `${msjExtra}`,
        icon: 'success',    
        background:'#E5E7EB',
        confirmButtonColor: 'green',
        confirmButtonText: 'Confirmar compra!!!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Gracias por su compra!!!',
            text: 'Le hemos enviado un mail con los datos de su compra',
            background:'#E5E7EB',
            confirmButtonColor: 'green'

        }).then(()=>{
            toogleCheckout()
            vaciarCarrito()
            localStorage?.removeItem('carritoLocal') 
            verificaCarritoAbierto()
        })
        }

      })
}


function registraUsuario(index) {
                
    usuEncontrado.idUsuario = usuarioReg[index].idUsuario
    usuEncontrado.email = usuarioReg[index].email
    usuEncontrado.nombre = usuarioReg[index].nombre
    usuEncontrado.apellido = usuarioReg[index].apellido
    usuEncontrado.pais = usuarioReg[index].pais
    usuEncontrado.localidad = usuarioReg[index].localidad
    usuEncontrado.estado = usuarioReg[index].estado
    usuEncontrado.direccion = usuarioReg[index].direccion
    
    muestraUsuarioRegistrado()
    
    if (rememberMe.checked){
        localStorage.setItem('usuRegistrado', JSON.stringify(usuEncontrado))
        carrito.usuario = usuEncontrado
        guardaCarrito()
    }else{
        sessionStorage.setItem('usuRegistrado', JSON.stringify(usuEncontrado))
    }

    acceso = true
}

function muestraUsuarioRegistrado(){
    usuLabel.innerHTML = usuEncontrado.nombre
    usuLabel.classList.remove('hidden')
    navbarTitulo.classList.add( 'hidden')
    cargaUsuarioRecuperado(usuEncontrado)
    toogleyaTieneCuenta()
    menuUsuToggle()
}

function cargaUsuarioRecuperado(usu){
    
    checkoutEmail.value = usu?.email ||""
    checkoutNombre.value = usu?.nombre ||""
    checkoutApellido.value = usu?.apellido ||""
    checkoutPais.value = usu?.pais ||""
    checkoutProvincia.value = usu?.estado ||""
    checkoutLocalidad.value = usu?.localidad ||""
    checkoutDireccion.value = usu?.direccion ||""
}

function recuperaUsuarioRegistrado(){
    usuarioRegistrado = JSON.parse(localStorage.getItem('usuRegistrado'))
    if (usuarioRegistrado != null){
        usuEncontrado = usuarioRegistrado
        muestraUsuarioRegistrado()
    }
   
}

function eliminaUsuarioRegistrado(){
    localStorage?.removeItem('usuRegistrado') 
    sessionStorage?.removeItem('usuRegistrado')
    usuEncontrado.idUsuario =""
    usuEncontrado.email = ""
    usuEncontrado.nombre = ""
    usuEncontrado.apellido = ""
    usuEncontrado.pais = ""
    usuEncontrado.estado = ""
    usuEncontrado.localidad = ""
    usuEncontrado.direccion = ""
    carrito.usuario = {}
    guardaCarrito()
}

function ocultaUsuarioLogout(){
    usuLabel.innerHTML = ""
    usuLabel.classList.add('hidden')
    navbarTitulo.classList.remove( 'hidden')
    menuUsuToggle()
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

ItemCerrarSesion.addEventListener('click', (e) =>{
    toggleMenu()    
    
    confirmacion('','Esta seguro que desea cerrar sesion?','cierreSesion')
    .then(()=>{
        toast('success', 'sesion cerrada correctamente')
        eliminaUsuarioRegistrado()
        ocultaUsuarioLogout()

    })
    
    .catch(()=>{
        toast('error', 'accion cancelada por el usuario')
    }
    )
    
    
    
})