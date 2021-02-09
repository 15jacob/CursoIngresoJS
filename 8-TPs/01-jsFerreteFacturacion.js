/* Jacob Cristopher 1H
Ejercicio Funcionando (Correcciones hechas, me habia faltado un punto y coma en una de las lineas de "resultado")

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);
    
    resultado = precioUno + precioDos + precioTres;
    resultado = resultado.toFixed(2);
    resultado = parseFloat(resultado);
    
    alert("El resultado de la Suma es de " + resultado);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);
    
    resultado = (precioUno + precioDos + precioTres) / 3;
    resultado = resultado.toFixed(2);
    resultado = parseFloat(resultado);
    
    alert("El promedio de estos valores es de " + resultado);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    resultado = (precioUno + precioDos + precioTres) * 1.21;
    resultado = resultado.toFixed(2);
    resultado = parseFloat(resultado);
    
    alert("El precio final es de " + resultado + " (Con IVA)");
}