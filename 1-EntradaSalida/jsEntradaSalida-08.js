/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    let primer_valor;
    let segundo_valor;
    let resultado_division;
    let resultado_resto;

    primer_valor = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    segundo_valor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
    resultado_division = parseInt(primer_valor / segundo_valor);
    resultado_resto = primer_valor % segundo_valor;
    
    alert("El resultado de la division es " + resultado_division + " y el resto es " + resultado_resto);	
}
