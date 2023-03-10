



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