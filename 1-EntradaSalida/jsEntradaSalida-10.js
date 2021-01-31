/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    let sueldo_ingresado = parseInt(document.getElementById("txtIdImporte").value),
        sueldo_con_descuento = parseInt(sueldo_ingresado * 0.75);
    
    document.getElementById("txtIdResultado").value = sueldo_con_descuento;
}
