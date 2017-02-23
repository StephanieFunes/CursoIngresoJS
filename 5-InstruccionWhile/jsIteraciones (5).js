function Mostrar()
{
	var sexo;

	sexo = prompt("Ingrese f para femenino o m para masculino");

	while(!(sexo == "f" || sexo == "m"))
	{
		sexo = prompt("Error. Intente nuevamente");
	}

	document.getElementById('Sexo').value = sexo;


/*var sexo = prompt("ingrese f ó m .");

while(!(sexo == "f" || sexo == "m"))
	{
		sexo = prompt("Inválido. Ingrese f ó m ");

	}

document.getElementById('Sexo').value=sexo;*/

}//FIN DE LA FUNCIÓN