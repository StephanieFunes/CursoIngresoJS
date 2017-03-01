function Mostrar()
{

	var numAnterior;
	var numIngresado;
	var numRecorrido;
	var acumDivisor = 0;

	numIngresado = prompt("Ingrese un número");
	numIngresado = parseInt(numIngresado);

	for(numRecorrido = numIngresado -1; numRecorrido >2; numRecorrido--)
	{
		acumDivisor = 0;

		for(numAnterior = 1; numAnterior<(numIngresado/2); numAnterior++)
		{
			if (numIngresado % numAnterior == 0)
			{
				acumDivisor = acumDivisor + numAnterior;

			}
		}

		if(acumDivisor == numAnterior)
		{
			console.log("Es perfecto " + numIngresado);
		}

		else
		{
			console.log("No es perfecto " + numIngresado);
		}
	}

}//FIN DE LA FUNCIÓN