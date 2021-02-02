/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    
    let primer_valor;
    let segundo_valor;
    let resultado_cuenta;
	primer_valor = parseInt(document.getElementById("txtIdNumeroUno").value);
    segundo_valor = parseInt(document.getElementById("txtIdNumeroDos").value);
    resultado_cuenta = primer_valor + segundo_valor;
    
    alert('El resultado de la cuenta es: ' + resultado_cuenta);
}

