function boleto(ispago){
    if(ispago){
        return "O boleto está pago"
    }
    return "O boleto não está pago"
}

let isboletoPago = true
alert(boleto(isboletoPago))