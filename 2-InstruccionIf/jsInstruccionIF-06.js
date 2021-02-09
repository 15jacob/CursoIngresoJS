//Jacob Cristopher 1H
//Ejercicio IF 06 - Funcionando
function mostrar()
{
	//tomo la edad
    let edad;
    edad = document.getElementById("txtIdEdad").value;
    
    edad = parseInt(edad);
    
    if(edad > 17)
    {
        alert("Usted es mayor de edad");
    }
    else if(edad < 18 && edad > 12)
    {
        alert("Usted es adolescente");
    }
    else if(edad < 13)
    {
        alert("Usted es un niño");
    }

}//FIN DE LA FUNCIÓN