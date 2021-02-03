/*
Jacob Cristopher 1H
Codigo Funcionando

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{
    let primer_valor;
    let segundo_valor;
    let resultado_cuenta;
    
	primer_valor = document.getElementById("txtIdNumeroUno").value;
    segundo_valor = document.getElementById("txtIdNumeroDos").value;
    
    primer_valor = parseInt(primer_valor);
    segundo_valor = parseInt(segundo_valor);
    
    resultado_cuenta = primer_valor + segundo_valor;
    
    alert("La sumatoria de estos numeros da " + resultado_cuenta);
}

function restar()
{
    let primer_valor;
    let segundo_valor;
    let resultado_cuenta;
    
	primer_valor = document.getElementById("txtIdNumeroUno").value;
    segundo_valor = document.getElementById("txtIdNumeroDos").value;
    
    primer_valor = parseInt(primer_valor);
    segundo_valor = parseInt(segundo_valor);
    
    resultado_cuenta = primer_valor - segundo_valor;
    
    alert("El resultado es " + resultado_cuenta);
}

function multiplicar()
{ 
    let primer_valor;
    let segundo_valor;
    let resultado_cuenta;
    
	primer_valor = document.getElementById("txtIdNumeroUno").value;
    segundo_valor = document.getElementById("txtIdNumeroDos").value;
    
    primer_valor = parseInt(primer_valor);
    segundo_valor = parseInt(segundo_valor);
    
    resultado_cuenta = primer_valor * segundo_valor;
    
    alert("Estos numeros multiplicados dan " + resultado_cuenta);
}

function dividir()
{
    let primer_valor;
    let segundo_valor;
    let resultado_cuenta;
    
	primer_valor = document.getElementById("txtIdNumeroUno").value;
    segundo_valor = document.getElementById("txtIdNumeroDos").value;
    
    primer_valor = parseInt(primer_valor);
    segundo_valor = parseInt(segundo_valor);
    
    resultado_cuenta = primer_valor / segundo_valor;
    
    alert("La division de estos numeros da " + resultado_cuenta);
}

