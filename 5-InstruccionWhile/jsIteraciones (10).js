
function Mostrar()
{
	//Iteración hasta que el usuario quiera

	var respuesta = "si";
	var nota;
	var contador;
	var sumadorNota = 0;
	var promedioNota;
	var edad;
	var nombre;
	var sexo;
	var masviejo;
	var edadMasViejo;

	while(respuesta == "si")
	{
		
		contador++;
		nota = prompt("Por favor ingrese su nota");
		nota = parseInt(nota);

			while(nota < 0 || nota > 10)
			{
				nota = prompt("Por favor ingrese su nota");
				nota = parseInt(nota);
			}

		sumadorNota = sumadorNota + nota;

		edad = prompt ("Ingrese su edad");
		edad = parseInt(edad);

		nombre = prompt ("Ingrese su nombre");
		
		sexo = prompt ("Ingrese su sexo");
		
		//Acá termnó la carga y validación de datos

		//Comenzamos a hacer las operaciones necesarias

		if(contador)
		{
			masviejo = nombre;
			edadMasViejo = edad;
		}
		else
		{
			if (edad>edadMasViejo)
			{
				masviejo = nombre;
				edadMasViejo=edad;
			}

		}


		/*1- Cantidad de mujeres aprobadas.
		2- Cantidad de hombres mayores a 25 aprobados.
		3- Cantidad de mujeres menores a 20 años aprobados.
		4- Nombre de la mujer con mejro nota.
		5-Nombre del hombre con mejor nota.
		6-Promedio de los hombres
		7-Promedio de las mujeres
		8-Porcentaje de aprobados y desaprobados.
		9-Sexo y nombre de la primera persona que se saque 10.*/


		respuesta = prompt("Ingrese si para continuar");
	}
	
	promedioNota = sumadorNota / contador;

	document.write(promedioNota);

}//FIN DE LA FUNCIÓN