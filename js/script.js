
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

let usuEncontrado = {
    idUsuario: "",
    email: "",
    nombre: "",
    apellido: "",
    pais: "",
    estado: "",
    localidad: "",
}

let carrito = {
    idCarrito: "",
    usuario: {},
    contenidoCarrito: [],
    costoEnvio: 0,
    total: 0,
    items: 0
}


const listaProductos = []
let prodSeleccionados = []
let nuevaLista = []
let usuario
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
    confirm('borrar storage??') ? localStorage.clear() : ''
    recuperaUsuarioRegistrado()
    verificaCarritoAbierto()

}

function guardaCarrito() {
    localStorage.setItem('carritoLocal', JSON.stringify(carrito))
}

function verificaCarritoAbierto() {

    const carritoAbierto = JSON.parse(localStorage.getItem('carritoLocal'))
    if (carritoAbierto !== null) {

        if (carritoAbierto.idCarrito !== "") {
            carrito = carritoAbierto
        } else {
            carrito.idCarrito = Date.now()
            guardaCarrito()
        }
    } else {
        carrito.idCarrito = Date.now()
        guardaCarrito()

    }

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
    crearToastFiltro('filtro', 'filtrado por: ' + cat)
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

function comprar(id) {

    const prodSelec = listaProductos.find(obj => obj.idProd == id)

    if (carrito.contenidoCarrito.length === 0) {
        carrito.contenidoCarrito.push([prodSelec, 1])
        toast('success', `
                    ${prodSelec.nombreProd} agregado al carrito
                    `
        )
        calcularTotal()

    } else {
        if (carrito.contenidoCarrito.some(e => {
            return e[0].idProd == prodSelec.idProd
        })) {
            const indice2 = carrito.contenidoCarrito.find(e => {
                return e[0].idProd == prodSelec.idProd
            })
            if (indice2[1] < prodSelec.stockProd) {
                indice2[1]++
                toast('success', `
                    ${prodSelec.nombreProd} agregado al carrito
                    `
                )
                calcularTotal()

            } else {
                toast('error', 'Lo sentimos pero no queda mas Stock')
            }
        } else {
            carrito.contenidoCarrito.push([prodSelec, 1])
            toast('success', `
                    ${prodSelec.nombreProd} agregado al carrito
                    `)
            calcularTotal()

        }
    }

    console.log(carrito)
};

function cuentaProductos() {
    itemsBotonCarrito.innerHTML = carrito.items
}

function calcularTotal() {
    let valorTotal = 0
    let itemsTotal = 0
    carrito.contenidoCarrito.forEach(element => {
        let valorParcial = 0
        for (let i = 0; i < element[1]; i++) {
            valorParcial += element[0].precioProd

        }
        valorTotal += valorParcial
        itemsTotal += element[1]

    })
    carrito.total = valorTotal
    carrito.items = itemsTotal
    carrito.items > 0 ? (itemsBotonCarrito.classList.remove('hidden'), itemsBotonCarrito.classList.add('inline-flex')) : ""
    carrito.items >= 10 ? itemsBotonCarrito.classList.add("w-6") : ""
    cuentaProductos()
    generarItemsCarrito()
    actualizaTotalCarrito()

}

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


function generarItemsCarrito() {
    sectionProductos.innerHTML = ""
    let itemCarrito = document.createElement('div')

    let cadaItem = ""

    carrito.contenidoCarrito.forEach((prod, index) => {
        cadaItem +=
            `
        <div id="item${prod[0].idProd}" class="">
          <div class="flex justify-between m-2">
            <div class="w-16 min-w-[4rem] h-16 rounded-full overflow-hidden border border-gray-300">
              <img src="./res/img/prod/${prod[0].imagenProd}" alt="">
            </div>
            <div class="flex-grow max-w-[110px] sm:max-w-[170px]  ml-2 text-gray-800 dark:text-white">
              <h4 class=" truncate mr-0.5">${prod[0].nombreProd}</h4>
              <h5 class="font-semibold ">$${prod[0].precioProd}</h5>
              <div class="flex">
                <div>
                  <button>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                  </button>
                    
                </div>
                <div class=" mx-2">
                    ${prod[1]}
                </div>
                <div>
                  <button>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  </button>
                    
                  
                </div>
              </div>
            </div>
            <div class="text-black dark:text-white font-extrabold">
              $${(prod[0].precioProd * prod[1])}
            </div>
            <div class="text-gray-800 dark:text-white mx-1">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
              
            </div>
          </div>
          <hr class="bg-gray-300 h-0.5 mx-2">
        </div>
    `
    })
    itemCarrito.innerHTML = cadaItem
    sectionProductos.appendChild(itemCarrito)

}

function actualizaTotalCarrito(){
    subtotalDiv.innerHTML = `$${carrito.total}`
    totalDiv.innerHTML = `$${carrito.total + carrito.costoEnvio}`
}