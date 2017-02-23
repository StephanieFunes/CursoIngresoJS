function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;
	
	while(respuesta == "si")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		respuesta = prompt("Desea ingresar otro número?");
		contador ++;

		acumulador = acumulador+ numero;
	}

	promedio = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN