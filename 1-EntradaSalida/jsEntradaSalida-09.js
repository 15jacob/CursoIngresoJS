/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldo_ingresado;
    let sueldo_con_aumento;
    
    sueldo_ingresado = parseInt(document.getElementById("txtIdSueldo").value);
    sueldo_con_aumento = parseInt(sueldo_ingresado * 1.1);
    
    document.getElementById("txtIdResultado").value = sueldo_con_aumento;
}
