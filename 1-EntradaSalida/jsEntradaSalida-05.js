/*
Jacob Cristopher
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreDelAlumno = document.getElementById("txtIdNombre").value,
        apellidoDelAlumno = prompt("Ingrese su Apellido"),
        edadDelAlumno = prompt("Ingrese su Edad");
        
    
    alert("Usted se llama " + nombreDelAlumno + " " + apellidoDelAlumno +", y tiene " + edadDelAlumno +" años"");
}