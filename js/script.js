const cliente = document.getElementById("cliente")
const pedido = document.getElementById('pedido')
const retiro = document.getElementById('retiro')
const saludo = document.getElementById('saludo')


const usuarioReg = [{
    idUsuario: 1001,
    tipoUsuario: 0,
    email: 'jp.sarobe@gmail.com',
    password: '1234',
    nombre: 'Juan Pablo',
    apellido: 'Sarobe',
    pais: 'Argentina',
    estado: 'Neuquen',
    Localidad: 'Neuquen',

}]


const tiposUsuario = [{
    id: 0, tipo: 'Cliente'
}
    , {
    id: 1, tipo: 'Vendedor'
}
]

const listaProductos = []
let prodSeleccionados = []
let nuevaLista = []
let usuario
let idUsuEncontrado
let password
let acceso = false
let codigoProd
let listaProd = ''
let continuaComprando
let codigoVerificado
let listaFinal = ''
let precioNeto = 0
let pedidoFinal = ''
let cantidadProductos = 0


class Usuarios {
    constructor(idUsuario, tipoUsuario, email, password, nombre, apellido, pais, estado, localidad,) {
        this.idUsuario = idUsuario
        this.tipoUsuario = tipoUsuario
        this.email = email
        this.password = password
        this.nombre = nombre
        this.apellido = apellido
        this.pais = pais
        this.estado = estado
        this.localidad = localidad
    }
    insertarUsuario() {
        usuarioReg.push(this)
    }
}

class Productos {
    constructor(idProd, nombreProd, descripProd, precioProd, stockProd, imagenProd) {
        this.idProd = idProd
        this.nombreProd = nombreProd
        this.descripProd = descripProd
        this.precioProd = precioProd
        this.stockProd = stockProd
        this.imagenProd = imagenProd
    }

    cargarProducto() {
        listaProductos.push(this)
    }
}

productosArr.forEach(element => {
    let newId = 0
    if (listaProductos.length === 0) {
        newId = 1
    } else {
        newId = listaProductos[listaProductos.length - 1].idProd + 1
    }


    const producto = new Productos(
        newId, element[0], element[1], element[2], element[3]

    )
    producto.cargarProducto()

})

const nuevoUsuario = new Usuarios(1002, 0, '12', '12', 'Pedro', 'Martinez', 'Argentina', 'buenos Aires', 'La Plata');
nuevoUsuario.insertarUsuario()

function newUserPrompt() {
    const promptUsuario = new Usuarios(

        usuarioReg[usuarioReg.length - 1].idUsuario + 1,
        0,
        prompt('inserte email'),
        prompt('Inserte password'),
        prompt('Indique su nombre'),
        prompt('Indique su apellido'))

    promptUsuario.insertarUsuario()
    alert('Usuario creado correctamente')
}

function verifUsuario(val) {

    if (usuarioReg.some((usu) => usu.email === val)) {
        return true
    }
    return false
}


function crearNuevoUsuario(arrNewUser) {

    const formNuevoUsuario = new Usuarios(
        usuarioReg[usuarioReg.length - 1].idUsuario + 1,
        0,
        arrNewUser[0],
        arrNewUser[1],
        arrNewUser[2],
        arrNewUser[3]
    )
    formNuevoUsuario.insertarUsuario()
}


function acceder() {

    do {

        usuario = prompt('Bienvenido a la tienda de compras. \nPor favor introduzca su email registrado')

        if (usuario == null) {
            avisarCancel()
            break

        } else if (usuarioReg.some((usu) => usu.email === usuario)) {

            idUsuEncontrado = usuarioReg.findIndex(function (usuEnc) {
                return usuEnc.email === usuario

            })

            password = prompt('Ahora introduzca su password')

            if (password == null) {
                avisarCancel()
                break
            } else if (password === usuarioReg[idUsuEncontrado].password) {
                acceso = true


            } else {
                acceso = false
            }


        } else {

            if (confirm('Usuario no registrado, desea crear un nuevo usuario?')) {
                newUserPrompt()
                continue
            } else {
                avisarCancel()
                break
            }



        }

        if (acceso == false) {
            alert('Datos de acceso no válidos. por favor reintente')
        }
    } while (acceso !== true);

    return usuario

}

function avisarCancel() {
    alert("accion cancelada por el usuario")
}

function comprarProducto() {

    while (continuaComprando !== false) {
        let listaParaMostrar = listaProductos

        do {
            if (nuevaLista.length != 0) {
                listaParaMostrar = nuevaLista
            }
            if (continuaComprando !== false && codigoProd !== null) {
                codigoProd = prompt('Por favor indique el codigo del producto deseado \nSi el producto no aparece busquelo introduciendo parte de su nombre, por ej: zapa o vestido\n\n' + lista(listaParaMostrar))

            }
            validacion = verificaCodigo(codigoProd)
            listaParaMostrar = validacion[1]

        } while (validacion[0] == false && codigoProd !== null)

        if (codigoProd !== null) {
            let cantidad = ingresarCantidad()
            prodSeleccionados.push([codigoProd, cantidad])
        } else {
            codigoProd = ''
        }

        continuaComprando = confirm('desea seguir comprando?')


    }
}

function lista(listProdArr) {
    listaProd = ''
    if (listProdArr.length == 0) { listProdArr = listaProductos }

    listProdArr.forEach(e => {
        listaProd += 'codigo: ' + e.idProd + '  -   Producto: ' + e.nombreProd + '\n'

    });
    return listaProd
}




function verificaCodigo(codigo) {
    let codVerif = false
    nuevaLista = []
    if (codigo == null) {
        avisarCancel()
        codVerif = false
        continuaComprando = false
    } else if (listaProductos.some((e) => e.idProd == codigo)) {
        return codVerif = true
    } else {
        nuevaLista = listaProductos.filter((elem) => elem.nombreProd.toLowerCase().includes(codigo.toLowerCase()))
    }

    if (!codVerif && codigo !== null && nuevaLista.length === 0) { alert('el codigo ingresado no es correcto, por favor reintente') }
    return [codVerif, nuevaLista]
}

function ingresarCantidad() {

    do {
        cantidad = parseInt(prompt('Por favor indique la cantidad de unidades'))
    } while (isNaN(cantidad));


    return cantidad

}

function abonarProductos() {
    prodSeleccionados.forEach(e => {
        const element = e[0]

        const elemento = listaProductos.find(function (item) {
            return item.idProd == element
        })

        if (elemento) {
            listaFinal += `
            item: ${elemento.idProd} Producto: ${elemento.nombreProd} 
            Cantidad solicitada: ${e[1]} - Cantidad disponible: ${elemento.stockProd}
            Precio unitario: ${elemento.precioProd}
            
            `
            if (e[1] <= elemento.stockProd) {
                cantidadProductos += e[1]
                precioNeto += e[1] * elemento.precioProd

            } else {
                cantidadProductos += elemento.stockProd
                precioNeto += elemento.stockProd * elemento.precioProd
            }
        }


    })



    pedidoFinal = 'Detalle de su pedido:\n' + listaFinal + 'Cantidad de Productos total: ' + cantidadProductos + '\n\tPrecio Neto total:'
        + precioNeto + '\n\tPrecioFinal: ' + precioNeto * 1.21
    return confirm(pedidoFinal + '\n\nDESEA ACEPTAR EL PEDIDO?')

}



function fechaRetiro() {
    do {

        diaCompra = prompt('indique el nombre del dia para ir a retirar')
        if (diaCompra == null) {
            diaCompra = 'repetir'
        } else {
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



function init() {
    usuario = acceder()

    if (acceso) {
        alert('Bienvenido/a ' + usuarioReg[idUsuEncontrado].nombre + ' a nuestro portal de compras. \nPor favor elige uno de los siguientes productos')
        document.getElementById('saludoInicial').innerHTML = 'MUCHAS GRACIAS POR ELEGIRNOS'
        cliente.innerHTML = usuarioReg[idUsuEncontrado].nombre.toUpperCase() + ' ' + usuarioReg[idUsuEncontrado].apellido.toUpperCase()
        comprarProducto()


    }

    if (prodSeleccionados.length != 0) {
        if (!abonarProductos()) {
            alert('Lamentamos que cancele su compra, muchas gracias!!!')
            pedido.innerHTML = pedidoFinal
            saludo.innerHTML = 'Pedido no completado, lamentamos que cancele su compra, disculpe las molestias. Muchas gracias!!!'
        } else {
            diaCompra = fechaRetiro()
            pedido.innerHTML = pedidoFinal
            retiro.innerHTML = '\n\nDia de retiro: ' + diaCompra
            saludo.innerHTML = 'MUCHAS GRACIAS POR SU COMPRA'
            alert('MUCHAS GRACIAS POR ELEGIRNOS\n\nCliente: ' + usuarioReg[idUsuEncontrado].nombre.toUpperCase() + ' ' + usuarioReg[idUsuEncontrado].apellido.toUpperCase() + '\n' + pedidoFinal + '\n\nDia de retiro: ' + diaCompra)
        }
    }

}


