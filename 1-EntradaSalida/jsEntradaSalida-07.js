/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    let primer_valor = parseInt(document.getElementById("txtIdNumeroUno").value),
        segundo_valor = parseInt(document.getElementById("txtIdNumeroDos").value),
        resultado_cuenta = primer_valor + segundo_valor;
    
    alert('La sumatoria de estos numeros da ' +resultado_cuenta);	
}

function restar()
{
    let primer_valor = parseInt(document.getElementById("txtIdNumeroUno").value),
        segundo_valor = parseInt(document.getElementById("txtIdNumeroDos").value),
        resultado_cuenta = primer_valor - segundo_valor;
    
    alert('El resto de estos numeros da ' +resultado_cuenta);	
}

function multiplicar()
{ 
    let primer_valor = parseInt(document.getElementById("txtIdNumeroUno").value),
        segundo_valor = parseInt(document.getElementById("txtIdNumeroDos").value),
        resultado_cuenta = primer_valor * segundo_valor;
    
    alert('La division de estos numeros da ' +resultado_cuenta);	
}

function dividir()
{
    let primer_valor = parseInt(document.getElementById("txtIdNumeroUno").value),
        segundo_valor = parseInt(document.getElementById("txtIdNumeroDos").value),
        resultado_cuenta = primer_valor / segundo_valor;
    
    alert('Estos numeros multiplicados dan ' +resultado_cuenta);	
}

