/*
Jacob Cristopher 1H
Ejercicio 5-bis v2*/
function mostrar()
{	
	let NombreDelAlumno = document.getElementById("txtIdNombre").value,
        ApellidoDelAlumno = prompt("Ingrese su Apellido"),
        EdadDelAlumno = document.getElementById("txtIdEdad").value;
        
    
    alert("Usted se llama " + NombreDelAlumno + " " + ApellidoDelAlumno +", y tiene " + EdadDelAlumno +" años");
}