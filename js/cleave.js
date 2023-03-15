
// Se implemento la libreria Cleaver para darle formato a los datos de pago con tarjeta de credito.
// se utiliza la misma para traer la imagen de la tejrta si indrouce un codigo que comience con una categoria de tarjeta valida
// no se hace ningún tipo de validacion en los datos de la tajeta, mas alla del tipo de datos.


new Cleave('.input-tarjeta', {
    creditCard: true,
    onCreditCardTypeChanged: function(type) {

        const logoTarjeta = document.querySelector('.logoTarjeta') ;


        if (logoTarjeta.classList.length >1){

            logoTarjeta.classList.forEach((e) =>{
                if (e.startsWith('fa-cc'))
                logoTarjeta.classList.replace(e,`fa-cc-${type}`)

            } )
        }
    }
});

 new Cleave('.titularTarjeta', {
    date: false,
    uppercase: true,
    
});

 new Cleave('.input-vencimientoTarjeta', {
    date: true,
    datePattern: ['m', 'y']
});
 new Cleave('.input-cvvTarjeta', {
    numeral: true,
   
});