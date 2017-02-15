function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>-1 && numero<10))
		{
			numero = prompt("Número inválido. Ingrese un número de 0 al 9");
		}

	alert("El número ingresado es " + numero);


}//FIN DE LA FUNCIÓN