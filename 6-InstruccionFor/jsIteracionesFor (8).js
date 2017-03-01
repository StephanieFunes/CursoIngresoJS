function Mostrar()
{
	/* Al generar números random del 0 al 10 se debe contar la cantida de cada una de esta cifras, repetir la iteración 
	para lanzar el random 100.000 veces e informar:

	1- La cantidad de veces que salió el número del 0 al 10
	2- El porcentaje de veces que salió cada número con respecto al total.*/
	var numAnterior;
	var numIngresado;
	var numRecorrido;
	var tieneDivisor = 'no';

	numIngresado = prompt("Ingrese un número");
	numIngresado = parseInt(numIngresado);

	for(numRecorrido = numIngresado -1; numRecorrido >2; numRecorrido--)
	{
		tieneDivisor = "no";

		for(numAnterior = 2; numAnterior<(numIngresado/2); numAnterior++)
			{
				if (numIngresado % numAnterior == 0)
				{
					tieneDivisor = "si";
					break;

				}
			}

			if(tieneDivisor == "no")
			{
				console.log("Es primo " + numIngresado);
			}

			else
			{
				console.log("No es primo " + numIngresado);
			}
	}


			





	 




}//FIN DE LA FUNCIÓN