
function Mostrar()
{
	/*var contador = 0;
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

*/
	//Iteración hasta que el usuario quiera

	var respuesta = "si";
	var nota;
	var contador = 0;
	var sumadorNota = 0;
	var promedioNota;
	var edad;
	var nombre;
	var sexo;
	var masviejo;
	var edadMasViejo;
	var acumuladorMujeresAprobadas = 0;
	var acumuladorHombresAprobados = 0;
	var acumuladorMujeresMenoresAVeinte = 0;
	var promedioHombres;
	var promedioMujeres;
	var acumuladorHombres = 0;
	var sumaNotasHombres = 0;
	var acumuladorMujeres = 0;
	var sumaNotasMujeres = 0;
	var acumuladorHombresAprobadosTotal = 0;
	var HombresDesaprobados = 0;
	var mujeresDesaprobadas = 0;
	var nombreMujerConMejorNota;
	var mujerMejorNota;
	var nombreHombreMejorNota;
	var hombreMejorNota;
	var primerDiez;
	var sexoNotaDiez;
	var huboDiez = false;

	while(respuesta == "si")
	{
		
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

		while(edad < 0 && edad > 100)
		{
			edad = prompt("Error.Ingrese una edad válida");

		}

		nombre = prompt ("Ingrese su nombre");
		
		sexo = prompt ("Ingrese su sexo");

		while (sexo != "f" && sexo != "m")
		
		{
			sexo = prompt("Inválido. Ingrese f para femenino o m para masculino");
		}
		
		//Acá termnó la carga y validación de datos

		//Comenzamos a hacer las operaciones necesarias

		if(contador == 0)
		{
			masviejo = nombre;
			edadMasViejo = edad;

		}
		else
		{
			if (edad>edadMasViejo)
			{
				masviejo = nombre;
				edadMasViejo = edad;
			}

		}

		if(sexo == "f") 
		{
			if (nota >= 4)
			{
				acumuladorMujeresAprobadas = acumuladorMujeresAprobadas + 1;
			}

			if (nota < 4)
			{
				mujeresDesaprobadas = mujeresDesaprobadas + 1;
			}			
			
			if (edad < 20 && nota >= 4)
			{
				acumuladorMujeresMenoresAVeinte = acumuladorMujeresMenoresAVeinte + 1;

			}

			if(acumuladorMujeres == 0 || nota > mujerMejorNota)
			{
				nombreMujerConMejorNota = nombre;
				mujerMejorNota = nota;
			}

			acumuladorMujeres = acumuladorMujeres + 1;
			sumaNotasMujeres = sumaNotasMujeres + nota;
	
		}

		if (sexo == "m")
		{
			if (nota >= 4)
			{
				acumuladorHombresAprobadosTotal = acumuladorHombresAprobadosTotal + 1;
			}

			if (nota < 4)
			{
				HombresDesaprobados = HombresDesaprobados + 1;
			}

			if(edad > 25 && nota >= 4)
			{
					acumuladorHombresAprobados = acumuladorHombresAprobados + 1;
			}

			acumuladorHombres = acumuladorHombres + 1;
			sumaNotasHombres = sumaNotasHombres + nota;

			if (acumuladorHombres == 0 || nota > hombreMejorNota)
			{
				nombreHombreMejorNota = nombre;
				hombreMejorNota = nota;
			}
		}

		if (nota == 10 && !huboDiez)
		{
			primerDiez = nombre;
			sexoNotaDiez = sexo;
			huboDiez = true;
		}
			
		/*1- Cantidad de mujeres aprobadas.
		2- Cantidad de hombres mayores a 25 aprobados.
		3- Cantidad de mujeres menores a 20 años aprobados.
		4- Nombre de la mujer con mejor nota.
		5-Nombre del hombre con mejor nota.
		6-Promedio de los hombres
		7-Promedio de las mujeres
		8-Porcentaje de aprobados y desaprobados.
		9-Sexo y nombre de la primera persona que se saque 10.*/

		respuesta = prompt("Ingrese si para continuar");
		contador ++;
	}
	
	promedioNota = sumadorNota / contador;
	promedioHombres = sumaNotasHombres / acumuladorHombres;
	promedioMujeres =  sumaNotasMujeres / acumuladorMujeres;
	var porcentajeAprobados = (acumuladorHombresAprobadosTotal + acumuladorMujeresAprobadas) / (acumuladorHombres + acumuladorMujeres);
	var porcentajeDesaprobados = (HombresDesaprobados + mujeresDesaprobadas) / (acumuladorMujeres + acumuladorHombres);


	document.write("El promedio de notas es " + promedioNota + "<br>");
	document.write("La edad de la persona más vieja es " + edadMasViejo + "<br>");
	document.write("La cantidad de mujeres aprobadas es " + acumuladorMujeresAprobadas + "<br>");
	document.write("La cantidad de hombres mayores a 25 años aprobados es " + acumuladorHombresAprobados + "<br>");
	document.write("La cantidad de mujeres menores a 20 años aprobadas es " + acumuladorMujeresMenoresAVeinte + "<br>");
	document.write("El promedio de nota de los hombres es " + promedioHombres + "<br>");
	document.write("El promedio de nota de las mujeres es " + promedioMujeres + "<br>");
	document.write("El porcentaje de aprobados es " + porcentajeAprobados + "<br>");
	document.write("El porcentaje de desaprobados es " + porcentajeDesaprobados + "<br>");
	document.write("El nombre de la mujer con mejor nota es " + nombreMujerConMejorNota + "<br>");
	document.write("La primer persona que se sacó 10 fue " + primerDiez + " y su sexo es " + sexoNotaDiez);

}//FIN DE LA FUNCIÓN