
function Mostrar()
{
	var contador = 0;
	var numero;
	var respuesta = 'si';
	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		respuesta = prompt("Desea continuar?");
		contador++;

		if (numero < 0)
		{
			acumuladorNegativos = acumuladorNegativos + numero;
			cantidadNegativos = cantidadNegativos + 1; 


		}
		
		if (numero == 0)
		{
			cantidadCeros = cantidadCeros + 1;

		}

		if(numero % 2 == 0)
		{
			cantidadPares = cantidadPares + 1;	
		}

		if(numero > 0)
		{
			acumuladorPositivos = acumuladorPositivos + numero;
			cantidadPositivos = cantidadPositivos + 1;
			
		}


	}

	promedioPositivos = acumuladorPositivos / cantidadPositivos;
	promedioNegativos = acumuladorNegativos / cantidadNegativos;
	diferencia = acumuladorPositivos + acumuladorNegativos;

	document.write("La suma de los negativos es " + acumuladorNegativos + "<br>");
	document.write("La suma de los positivos es " + acumuladorPositivos + "<br>");
	document.write("La cantidad de negativos es " + cantidadNegativos + "<br>");
	document.write("La cantidad de positivos es " + cantidadPositivos + "<br>");
	document.write("La cantidad de ceros es " + cantidadCeros + "<br>");
	document.write("La cantidad de números pares es " + cantidadPares + "<br>");
	document.write("El promedio de los positivos es " + promedioPositivos + "<br>");
	document.write("El promedio de los negativos es "+ promedioNegativos + "<br>");
	document.write("La diferencia entre los números positivos y negativos es " + diferencia + "<br>");


	//Iteración hasta que el usuario quiera

	/*var respuesta = "si";
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
		9-Sexo y nombre de la primera persona que se saque 10.


		respuesta = prompt("Ingrese si para continuar");
	}
	
	promedioNota = sumadorNota / contador;

	document.write(promedioNota);*/

}//FIN DE LA FUNCIÓN