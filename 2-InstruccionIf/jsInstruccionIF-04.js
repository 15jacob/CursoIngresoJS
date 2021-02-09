//Jacob Cristopher 1H
function mostrar()
{
	//tomo la edad
    let edad;
    edad = document.getElementById("txtIdEdad").value;
    
    edad = parseInt(edad);
    
    if(edad > 12 && edad < 18){
        alert("Usted es adolescente");
    }
	

}//FIN DE LA FUNCIÓN