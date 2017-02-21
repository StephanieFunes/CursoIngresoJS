function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	var negativo;

	while(contador<5)
	{
		contador++;
		numero = prompt("Ingrese un número mayor a -10 y menor a 10");
		numero = parseInt(numero);

		while(numero < -10 ||numero >10)
		{
			numero = prompt("Error.Reingrese un número mayor a -10 y menor a 10");
			numero = parseInt(numero);
		}//Fin while(numero < -10 ||numero >10)

			if(numero<0)
			{
				negativo = negativo * numero;

			}
			else{

				acumulador= acumulador+numero;

			}
	
	}

	promedio = acumulador/5;//ó acumulador/contador; Debe ir afuera de la función porque sino haría la opreación 5 veces


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
