//Jacob Cristopher 1H
//TP4 Ferrete Iluminacion

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
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
            if(cantidadLamparitas == 4)
            {
                if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
                {
                    precioUnitario = 35 * 0.75;
                }
                else
                {
                    precioUnitario = 35 * 0.8;
                }
            }
            else
            {
                if(cantidadLamparitas == 3)
                {
                    if(marcaLamparitas == "ArgentinaLuz")
                    {
                        precioUnitario = 35 * 0.85;
                    }
                    else
                    {
                        if(marcaLamparitas == "FelipeLamparas")
                        {
                            precioUnitario = 35 * 0.9;
                        }
                        else
                        {
                            precioUnitario = 35 * 0.95;
                        }
                    }
                }
                else
                {
                    precioUnitario = 35;
                }
            }
        }
    }
    
    precioFinal = cantidadLamparitas * precioUnitario;

    if(precioFinal > 120)
    {
        let impuestoIngresoBruto;
        impuestoIngresoBruto = precioFinal * 0.1;
        
        alert("IIBB Usted pago $" + impuestoIngresoBruto)
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
