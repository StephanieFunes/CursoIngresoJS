function Mostrar()
{
	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta == "si")
	{
		contador++;
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		respuesta = prompt("Desea ingresar otro número?");
		
		if(numero > 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
		}

		console.log("El negativo es " + negativo);
		console.log("El positivo es " + positivo);
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN