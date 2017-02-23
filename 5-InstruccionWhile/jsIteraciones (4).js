function Mostrar()
{
	var numero;

	numero = prompt("Ingrese un número del 0 al 9");

	while(!(numero > -1 && numero < 10))
	{
		numero = prompt ("Error.Intentelo nuevamente");

	}

	document.getElementById('Numero').value = numero;


	/*var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>-1 && numero<10))
		{
			numero = prompt("Número inválido. Ingrese un número de 0 al 9");
		}

	alert("El número ingresado es " + numero);*/


}//FIN DE LA FUNCIÓN