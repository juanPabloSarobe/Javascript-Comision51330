
/* archivo exclusivo para la generacion del toast */


function toast(tipo, msj) {
    let icono = ""
    switch (tipo) {
        case 'success':
            icono = `<div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
            </svg>
            </div>`
            break;
        case 'error':
            icono = `<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Error icon</span>
        </div>`
            break
        default:
            icono = `<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-700 dark:text-yellow-200">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Warning icon</span>
        </div>`
            break

    }


    let toast = document.createElement("div");
    toast.id = 'toastSuccess'
    toast.classList.add("animate__animated", "animate__fadeInUp", "fixed", "right-5", "top-20", "z-[51]");

    toast.innerHTML = `
    <div 
    class="  flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-700"
    role="alert">
    ${icono}
    <div class="ml-3 text-sm font-normal">${msj}</div>
    </div>
    `;
    



    document.body.append(toast)
    const myTimeout = setTimeout(toastOut, 2000);
    const timeOutToast = setTimeout(cleanToast, 4000);

    function toastOut() {
        document.getElementById("toastSuccess").classList.remove('animate__fadeInUp')
        document.getElementById("toastSuccess").classList.add('animate__fadeOutUp')


    }

    function cleanToast() {
        toast.remove()

    }

}


let resultado
function confirmacion(tipo, msj, evento) {

    let icono = ""
    switch (tipo) {
        case 'success':
            icono = `<div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
            </svg>
            </div>`
            break;
        case 'error':
            icono = `<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Error icon</span>
        </div>`
            break
        default:
            icono = `<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-700 dark:text-yellow-200">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Warning icon</span>
        </div>`
            break

    }


    let conf = document.createElement("div");
    conf.id = 'confirmacion'
    conf.classList.add("bg-gray-700", "bg-opacity-70", "fixed", "inset-0", "z-[51]");

    conf.innerHTML = `
    <div id="popup-modal" tabindex="-1" class="animate__animated animate__fadeInUp  flex items-center justify-center z-50 p-4 overflow-x-hidden overflow-y-auto inset-0 h-modal h-full">
    <div class="relative w-full h-auto max-w-md ">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        
        <div class="p-6 text-center">
          <svg aria-hidden="true" class="mx-auto mb-4 text-primary-600 w-14 h-14 dark:text-primary-600"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">${msj}</h3>
          <button id="${evento}" data-modal-hide="popup-modal" type="button" class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
            Si, estoy seguro
          </button>
          <button id="botonCancelar" data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
    `;



    document.body.append(conf)

    aceptar = d.getElementById(`${evento}`)
    cancelar = d.getElementById('botonCancelar')

    aceptarEvento(aceptar, cancelar)

}

/* Funcion sin terminar, esperando aprender AWAIT!!!!! */
function aceptarEvento(aceptar, cancelar) {

    aceptar.addEventListener('click', (e) => {
        e.preventDefault
        document.getElementById("popup-modal").classList.remove('animate__fadeInUp')
        document.getElementById("popup-modal").classList.add('animate__fadeOutUp')

        const timeOutConf = setTimeout(cleanConf, 800);
        function cleanConf() {
            document.getElementById("confirmacion").remove()

        }
        return resultado = true
    })

    cancelar.addEventListener('click', (e) => {
        e.preventDefault
        document.getElementById("popup-modal").classList.remove('animate__fadeInUp')
        document.getElementById("popup-modal").classList.add('animate__fadeOutUp')

        const timeOutConf = setTimeout(cleanConf, 800);
        function cleanConf() {
            document.getElementById("confirmacion").remove()

        }

        return resultado = false
    })

    return resultado
}
