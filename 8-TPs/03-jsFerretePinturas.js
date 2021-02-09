/* Jacob Cristopher 1H
Codigo Funcionando

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados ()
{
	let temperatura;
    let fahrenheitCentigrados;
    
    temperatura = document.getElementById("txtIdTemperatura").value
    temperatura = parseInt(temperatura);
    
    fahrenheitCentigrados = (temperatura - 32) / 1.8;
    fahrenheitCentigrados = fahrenheitCentigrados.toFixed(2);
    
    alert(temperatura + " Fahrenheit son " + fahrenheitCentigrados + " grados Centigrados");
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let centigradosFahrenheit;
    
    temperatura = document.getElementById("txtIdTemperatura").value
    temperatura = parseInt(temperatura);
    
    centigradosFahrenheit = (temperatura * 1.8) + 32;
    centigradosFahrenheit = centigradosFahrenheit.toFixed(2);
    
    alert(temperatura + " Centigrados son " + centigradosFahrenheit + " grados Fahrenheit");
}
