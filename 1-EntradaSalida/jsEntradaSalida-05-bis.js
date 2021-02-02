/*
Jacob Cristopher 1H
Ejercicio 5-bis v2*/
function mostrar()
{	
    let nombreDelAlumno;
    let apellidoDelAlumno;
    let edadDelAlumno;
    
	nombreDelAlumno = document.getElementById("txtIdNombre").value;
    apellidoDelAlumno = prompt("Ingrese su Apellido");
    edadDelAlumno = document.getElementById("txtIdEdad").value;
        
    alert("Usted se llama " + nombreDelAlumno + " " + apellidoDelAlumno + ", y tiene " + edadDelAlumno + " años");
}