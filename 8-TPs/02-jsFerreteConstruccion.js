/* Jacob Cristopher 1H
Codigo Funcionando

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let perimetroTerreno;
    let cantidadAlambre;
    
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);
    
    perimetroTerreno = 2 * (largoTerreno + anchoTerreno);
    cantidadAlambre = perimetroTerreno * 3;
    cantidadAlambre = cantidadAlambre.toFixed(2);
    
    alert("Es necesario comprar " + cantidadAlambre + " metro/metros de alambre");
}
function Circulo () 
{
    let radioTerreno;
    let perimetroTerreno;
    let cantidadAlambre;
    
    radioTerreno = document.getElementById("txtIdRadio").value;
    radioTerreno = parseInt(radioTerreno);
    
    perimetroTerreno =  2 * Math.PI * radioTerreno;
    cantidadAlambre = perimetroTerreno * 3;
    cantidadAlambre = cantidadAlambre.toFixed(2);
    
    alert("Es necesario comprar " + cantidadAlambre + " metro/metros de alambre");
}
function Materiales () 
{
    let largoTerreno;
    let anchoTerreno;
    let areaTerreno;
    let bolsasCemento;
    let bolsasCal;
    
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);
    
    areaTerreno = largoTerreno * anchoTerreno;
    
    bolsasCemento = areaTerreno * 2;
    bolsasCal = areaTerreno * 3;
    
    //Se me ocurre usar un Math.ceil para redondear hacia arriba la cantidad de bolsas a comprar (Seria dificil poder comprar 6.2 bolsas de Cal por ejemplo, mas conveniente comprar 7)
    bolsasCemento = Math.ceil(bolsasCemento);
    bolsasCal = Math.ceil(bolsasCal);
    
    alert("Se necesitarian " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de Cal");
}