function Mostrar()
{

	var contador= 0;
	var numero;
	var max;
	var min;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{		
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		respuesta = prompt("¿Desea continuar?");
				
		if(contador == 0)
		{
			max = numero;
			min = numero;
		}

		else
		{
 			if(numero > max)
 			{
 				max = numero;

 			}

 			if(numero < min)
 			{
 				min = numero;

 			}

		}
	
	}

	document.getElementById('maximo').value = max;
	document.getElementById('minimo').value = min;

}//FIN DE LA FUNCIÓN