

function acceder() {

    do {
        usuario = prompt('Bienvenido a la tienda de compras. \nPor favor introduzca su usuario registrado')
        password = prompt('Ahora introduzca su password')

        if (usuario == null || password == null) {
            alert("accion cancelada por el usuario")
            break
        } else {
            usuario = usuario.toLowerCase()
            password = password.toLowerCase()
            acceso = validarLogin(usuario, password)

        }

        if (acceso == false) {
            alert('Datos de acceso no válidos. por favor reintente')
        }
    } while (acceso == false);

    return usuario

}

function validarLogin(usuario, password) {
    for (let i = 0; i < usuarioReg.length; i++) {

        if (usuario == usuarioReg[i][0].toLowerCase() && password == usuarioReg[i][1].toLowerCase()) {
            acceso = true
            break

        } else {
            acceso = false
        }

    }
    return acceso
}


function comprarProducto() {

    while (continuaComprando !== false) {

        do {
            if (continuaComprando !== false && codigoProd !== null) {
                codigoProd = prompt('Por favor indique el codigo del producto deseado \n' + lista())
                listaProd = ''
            }

        } while (verificaCodigo(codigoProd) == false && codigoProd !== null)

        if (codigoProd !== null) {
            let cantidad = ingresarCantidad()
            prodSeleccionados.push([codigoProd, cantidad])



        } else {
            codigoProd = ''
        }

        continuaComprando = confirm('desea seguir comprando?')


    }
}

function lista() {
    for (let i = 0; i < listaProductos.length; i++) {
        listaProd += 'codigo: ' + listaProductos[i][0] + '   -   Producto: ' + listaProductos[i][1] + '\n'

    }
    return listaProd
}

function verificaCodigo(codigo) {
    let codVerif
    if (codigo == null) {
        alert('Accion cancelada por el usuario')
        codVerif = false
        continuaComprando = false
    } else {
        for (let i = 0; i < listaProductos.length; i++) {

            if (codigo == listaProductos[i][0]) {
                codVerif = true
                break
            } else {
                codVerif = false

            }

        }
    }

    if (!codVerif && codigo !== null) { alert('el codigo ingresado no es correcto, por favor reintente') }
    return codVerif
}

function ingresarCantidad() {

    do {
        cantidad = parseInt(prompt('Por favor indique la cantidad de unidades'))
    } while (isNaN(cantidad));


    return cantidad

}


function pagarProductos() {

    for (let i = 0; i < prodSeleccionados.length; i++) {
        
        const element = prodSeleccionados[i][0];
        
        for (let j = 0; j < listaProductos.length; j++) {
            const elemento = listaProductos[j][0] == element;
            
            if (elemento) {
                listaFinal += 'item: '+ (i+1) + ' Producto: ' + listaProductos[j][1] + '\nCantidad solicitada: ' 
                + prodSeleccionados[i][1] + ' - Cantidad disponible: ' +listaProductos[j][2] + '\nPrecio Unitario: '
                + listaProductos[j][3] + '\n\n'
                
                if (prodSeleccionados[i][1] <= listaProductos[j][2] ) {
                    cantidadProductos += prodSeleccionados[i][1]
                    precioNeto += prodSeleccionados[i][1] * listaProductos[j][3]
                }else{
                    cantidadProductos += listaProductos[j][2]
                    precioNeto += listaProductos[j][2]* listaProductos[j][3]
                }
            }

            
        }
        
    }
    pedidoFinal = 'Detalle de su pedido:\n'+ listaFinal + 'Cantidad de Productos total: '+ cantidadProductos +'\n\tPrecio Neto total:' 
        + precioNeto + '\n\tPrecioFinal: '+ precioNeto *1.21
return confirm( pedidoFinal+ '\n\nDESEA ACEPTAR EL PEDIDO?')
    
}


function fechaRetiro(){
    do {
                
        diaCompra= prompt('indique el nombre del dia para ir a retirar')
        if (diaCompra == null) {
            diaCompra ='repetir'
        }else{
            diaCompra = diaCompra.toLowerCase()
        }
        switch (diaCompra) {
            case 'lunes':
                alert('Día no disponible')
                diaCompra = 'repetir'
                break;
            case 'martes':
            case 'miercoles':
            case 'viernes':
                alert('Día habilitado')
                break;
            case 'jueves':
                alert('Día Feriado')
                diaCompra = 'repetir'
                break;
            case 'sabado':
            case 'domingo':
                alert('El negocio esta cerrado')
                diaCompra = 'repetir'
                break
            default:
                alert('valor ingresado incorrecto')
                
                diaCompra = 'repetir'             
        }
    } while (diaCompra == 'repetir')
    return diaCompra
}


const cliente = document.getElementById("cliente")
const pedido = document.getElementById('pedido')
const retiro = document.getElementById('retiro')
const saludo = document.getElementById('saludo')

const usuarioReg = [['juan', '1234'], ['pedro', 'Coder'], ['Ana', 'CH2023']]
const listaProductos = [['1', 'Zapatillas', 10, 20000], ['2', 'Remera', 5, 3500], ['3', 'Gorra', 2, 1500], ['4', 'Lentes', 0, 800]]
let prodSeleccionados = []
let usuario
let password
let acceso = false
let codigoProd
let listaProd = ''
let continuaComprando
let codigoVerificado
let listaFinal =''
let precioNeto = 0
let pedidoFinal = ''
let cantidadProductos = 0 

usuario = acceder()

if (usuario != null) {
    alert('Bienvenido/a ' + usuario.toUpperCase() + ' a nuestro portal de compras. \nPor favor elige uno de los siguientes productos')
    document.getElementById('saludoInicial').innerHTML = 'MUCHAS GRACIAS POR ELEGIRNOS'
    cliente.innerHTML =  usuario.toUpperCase()
    comprarProducto()
    

}

if (prodSeleccionados.length != 0 ) {
    if (!pagarProductos()){
        alert('Lamentamos que cancele su compra, muchas gracias!!!')
        pedido.innerHTML = pedidoFinal
        saludo.innerHTML = 'Pedido no completado, lamentamos que cancele su compra, disculpe las molestias. Muchas gracias!!!' 
    }else{
        diaCompra = fechaRetiro()
        pedido.innerHTML = pedidoFinal
        retiro.innerHTML = '\n\nDia de retiro: ' + diaCompra 
        saludo.innerHTML = 'MUCHAS GRACIAS POR SU COMPRA' 
       alert('MUCHAS GRACIAS POR ELEGIRNOS\n\nCliente: '+ usuario.toUpperCase() +'\n' + pedidoFinal + '\n\nDia de retiro: ' + diaCompra )
    }
}




