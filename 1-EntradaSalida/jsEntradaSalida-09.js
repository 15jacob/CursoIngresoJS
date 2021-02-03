/*
Jacob Cristopher 1H
Codigo Funcionando

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldoIngresado;
    let sueldoConAumento;
    // let aumento;
    
    sueldoIngresado = document.getElementById("txtIdSueldo").value;
    sueldoIngresado = parseInt(sueldoIngresado);
    
    // aumento = sueldoIngresado * 10 / 100;
    
    // aumento = sueldoIngresado * 0.1;
    
    //sueldoConAumento = sueldoIngresado + aumento;
    
    //sueldoConAumento = sueldoIngresado + (sueldoIngresado * 0.1);
    
    sueldoConAumento = sueldoIngresado * 1.1;
    
    document.getElementById("txtIdResultado").value = sueldoConAumento;
}
