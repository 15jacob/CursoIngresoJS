/*
Jacob Cristopher 1H
Codigo Funcionando

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    let sueldoIngresado;
    let sueldoConDescuento;
    // let descuento;
    
    sueldoIngresado = document.getElementById("txtIdImporte").value;
    sueldoIngresado = parseInt(sueldoIngresado);
    
    // descuento = sueldoIngresado * 25 / 100;
    
    // descuento = sueldoIngresado * 0.25;
    
    //sueldoConDescuento = sueldoIngresado - descuento;
    
    //sueldoConDescuento = sueldoIngresado - (sueldoIngresado * 0.25);
    
    sueldoConDescuento = sueldoIngresado * 0.75;
    
    document.getElementById("txtIdResultado").value = sueldoConDescuento;
}
