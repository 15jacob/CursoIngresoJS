//Jacob Cristopher 1H
//TP4 Ferrete Iluminacion (Puntos A y B unicamente)

function CalcularPrecio () 
{
    //Variables, declaraciones y parseo
 	let cantidadLamparitas;
    let marcaLamparitas;
    let precioUnitario;
    let precioFinal;
    
    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    marcaLamparitas = document.getElementById("Marca").value;
    
    cantidadLamparitas = parseInt(cantidadLamparitas);

    if(cantidadLamparitas > 5)
    {
        precioUnitario = 35 * 0.5;
        precioFinal = cantidadLamparitas * precioUnitario;
    }
    else
    {
        if(cantidadLamparitas == 5)
        {
            if(marcaLamparitas == "ArgentinaLuz")
            {
                precioUnitario = 35 * 0.6;
            }
            else
            {
                precioUnitario = 35 * 0.7;
            }
        }
        else
        {
            precioUnitario = 35;
        }
    }
    
    precioFinal = cantidadLamparitas * precioUnitario;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
