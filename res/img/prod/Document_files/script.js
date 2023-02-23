
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
let indexUsuEncontrado
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
    constructor(idProd, nombreProd, descripProd, precioProd, stockProd, imagenProd, valoracion, categoria, marca, palclaves, destacado, sexo, busqueda) {
        this.idProd = idProd
        this.nombreProd = nombreProd
        this.descripProd = descripProd
        this.precioProd = precioProd
        this.stockProd = stockProd
        this.imagenProd = imagenProd
        this.valoracion = valoracion
        this.categoria = categoria
        this.marca = marca
        this.palclaves = palclaves
        this.destacado = destacado
        this.sexo = sexo
        this.busqueda = busqueda
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
    const e6 = categorias.find(obj => obj.idCategoria == element[6])
    const e7 = marcas.find(obj => obj.idMarca == element[7])

    const producto = new Productos(
        newId, element[0], element[1],
        element[2], element[3], element[4],
        element[5], e6.Categoria, e7.Marca,
        element[8], element[9], element[10],
        `${element[0]} ${element[1]} ${e6.Categoria}  ${e7.Marca} ${element[8]} ${element[10]}  `

    )
    producto.cargarProducto()

})

const nuevoUsuario = new Usuarios(1002, 0, '12', '12', 'Pedro', 'Martinez', 'Argentina', 'buenos Aires', 'La Plata');
nuevoUsuario.insertarUsuario()



function verifUsuario(val) {

    if (usuarioReg.some((usu) => usu.email === val)) {

        indexUsuEncontrado = usuarioReg.findIndex(function (usuEnc) {
            return usuEnc.email === val
        })

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

/* Nueva seccion de funciones-------------------------------------- */

const contenedor = document.getElementById("zonaProductos");
const seccionCategorias = document.querySelector("#seccionCategorias")
const catSelected = document.getElementsByClassName("catSelected")




function catSelectedFalse() {
    for (let i = 0; i < categorias.length; i++) {
        document.getElementById(`selected${i}`).classList.add('hidden')

    }
}



window.onload = (e) => {
    generarProductos(listaProductos)
    generarCategorias(categorias)
}


function filtraPalabraClave(str) {
    catSelectedFalse()
    const nuevoArray2 = listaProductos.filter(obj => {
        return obj.busqueda.toLowerCase().includes(str.toLowerCase())
    })

    generarProductos(nuevoArray2)
    toastOut()
    
}


function filtrarPorCategoria(cat, tabInx) {

    catSelectedFalse()

    const nuevoArray = listaProductos.filter(obj => {
        return obj.categoria.toLowerCase() === cat.toLowerCase();
    });

    generarProductos(nuevoArray)

    document.getElementById(`selected${tabInx}`).classList.remove('hidden')
    crearToastFiltro('filtro', 'filtrado por: '+cat)
}

function limpiarFiltros() {
    catSelectedFalse()
    toastOut()
    generarProductos(listaProductos)

}


function generarProductos(arrProd) {

    contenedor.innerHTML = ""


    arrProd.forEach((producto, indice) => {

        let card = document.createElement("div");

        card.id = 'producto' + producto.idProd
        card.classList.add("w-full", "relative", "hover:scale-105", "transition-transform", "max-w-sm", "bg-gray-50", "border", "border-gray-200", "rounded-lg", "shadow", "dark:bg-gray-800", "dark:border-gray-700");
        producto.stockProd > 0 ? card.classList.add("conStock") : ""
        producto.destacado ? card.classList.add("destacado") : ""

        let estrellas = ''
        for (let i = 0; i < Math.round(producto.valoracion); i++) {
            estrellas += `
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
        `

        }
        for (let i = Math.round(producto.valoracion); i < 5; i++) {
            estrellas += `
        <svg aria-hidden="true" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
        `

        }

        card.innerHTML = `
        <div id="" class=" ">
            <div class=" flex justify-center">
                <img class="p-4 mt-4 rounded-3xl" src="./res/img/prod/${producto.imagenProd}" alt="product image" />
            </div>

            <div class="px-5 pb-5 md:self-end">
                <div >
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${producto.nombreProd}</h5>
                </div>
                    <p class="text-lg font-light tracking-tight text-gray-600 dark:text-white">${producto.descripProd}</p>
                    <h3 class="text-2xl font-extrabold text-primary-600 text-right">${producto.marca}</h3>
                    <p class="text-xs text-gray-500 text-right font-light " >${producto.sexo}</p>
                    <div class="flex items-center mt-2.5 mb-5">
                    ${estrellas}
                    <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">${producto.valoracion}
                    </span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$${producto.precioProd}</span>
                    <button onClick="comprar(${producto.idProd})" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Agregar al Carrito

                    </button>
                    
                </div>
            </div>

        </div>
        <div class="absolute inset-0 ">

            <div class=" bg-gray-700 opacity-60 absolute inset-0 rounded-lg cursor-not-allowed flex items-center">
            </div>
            <p class="text-primary-600 opacity-100 absolute top-[45%] left-[15%] cursor-not-allowed font-bold text-center mx-auto text-5xl -rotate-45" >Sin Stock</p>
            
        </div>

        `


        contenedor.appendChild(card);
    })

}

const comprar = (id) => {

    const prodSelec = listaProductos.find(obj => obj.idProd == id)
    console.log(prodSelec)
    toast('success', `
${prodSelec.nombreProd} agregado al carrito
`
)

prodSeleccionados.push([prodSelec, 1])
console.log(prodSeleccionados)
};



function generarCategorias(arrCat) {
    seccionCategorias.innerHTML = ""


    let itemCat = document.createElement('div')

    itemCat.classList.add("relative", "w-full", "flex", "snap-x", "gap-10", "overflowx-x-auto", "mx-auto", "h-36", "items-center")

    const divInicial = `<div class="snap-center shrink-0 cursor-pointer" onclick="limpiarFiltros()" >
        <div class=" shrink-0 w-16 sm:w-24 ml-5 text-gray-800 dark:text-gray-200"> Categorias: </div>
    </div>`
    let cadaCateg = ""
    arrCat.forEach((item, indice) => {

        cadaCateg +=
            ` <div tabindex="${indice}" id="${item.Categoria}" onclick="filtrarPorCategoria(this.id, ${indice})" class="relative w-32 h-32 shrink-0  snap-center cursor-pointer focus:circuloInterior">
            <div class="rounded-full overflow-hidden  ">
                 <img src="./res/img/prod/${item.path}" alt="" class=" object-cover h-32 w-32">
            </div>
            <div class=" absolute -bottom-0.5 bg-white dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-600 dark:ring-3 left-0 right-0 text-center rounded-lg ring-2 ring-primary-300 text-primary-400">
                <h6 class="">${item.Categoria}</h6>
            </div>
  
            <div id="selected${indice}" class="hidden absolute w-7 h-7 top-0 right-2 bg-white  rounded-full catSelected">
                <svg class="text-green-600 bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
          
            </div>
        </div>
        `
    })

    const divFinal =
        `<div class="snap-center shrink-0">
      <div class="shrink-0 w-4 sm:w-48"></div>
    </div>
    `

    itemCat.innerHTML = divInicial + cadaCateg + divFinal

    seccionCategorias.appendChild(itemCat)


}