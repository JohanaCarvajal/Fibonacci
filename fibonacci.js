
function ingresarNumero2(cantidad){

    var numero1 = 0;
    var numero2 = 1;
    var cont = 0;

    while(numero2<cantidad){
        var resultado = numero1 + numero2;
        numero1 = numero2;
        numero2 = resultado;
        cont++;
        document.write(resultado);
    }

}

ingresarNumero2(100);
