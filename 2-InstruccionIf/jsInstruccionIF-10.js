//Jacob Cristopher 1H
//Ejercicio IF 10 - Funcionando
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let notaExamen;
    notaExamen = Math.floor(Math.random() * 10 + 1);
    
    if(notaExamen == 9 || notaExamen == 10)
    {
        alert("EXCELENTE");
    }
    else if(notaExamen > 3)
    {
        alert("APROBÓ")
    }
    else if(notaExamen < 4)
    {
        alert("Vamos, la proxima se puede");
    }

}//FIN DE LA FUNCIÓN