function Nivel1Ej1() {

	var base;
	var superficie;

	base = document.getElementById('baseDelCuadrado').value;
	base = parseInt(base);

	superficie = base * base;

	alert("La superficie del cuadrado es " + superficie);

	/*var base;
	var perimetro;

	base = document.getElementById('baseDelCuadrado').value ;
	base = parseInt(base);
	perimetro = 4 * base;

	alert("El perímetro es " + perimetro);*/

}

function Nivel1Ej2() {

	var importe;
	var importeFinal;

	importe = prompt("Ingrese un importe");
	importe = parseInt (importe);

	importeFinal = importe * 0.75;
	alert ("El importe final es " + importeFinal);

	/*var importe;
	var importeFinal;

	importe = parseInt(importe);
	importe = prompt ("Introduzca el importe de un producto");

	importeFinal = importe * 1.21;

	alert("El importe final es " + importeFinal);*/
}

function Nivel1Ej3() {

	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno = document.getElementById('precioUno').value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById('precioDos').value;
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById('precioTres').value;
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;
	promedio = suma / 3;

	alert("La suma de los precios es " + suma + " y el promedio es " + promedio);

	/*var largo;
	var ancho;
	var perimetro;

	largo = parseInt(largo);
	ancho = parseInt (ancho);

	largo = document.getElementById('largoDelTerreno').value;
	ancho = document.getElementById('anchoDelTerreno').value;

	perimetro = (2 * ancho + 2 * largo) * 3;

	alert("Se necesitan " + perimetro + "metros");*/
		
}

function Nivel2Ej4() {

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = prompt("Ingrese un número");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese un número");
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	if(suma > 0)
	{
		alert("La suma da un número positivo");
	}
	if (suma < 0)
	{
		alert("La suma da un número negativo");
	}
	if(suma == 0)
	{
		alert ("La suma da 0");
	}

	/*var numeroUno;
	var numeroDos;
	var resultado;
	
	numeroUno = prompt("Ingrese un número");
	numeroDos = prompt ("Ingrese un número");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
		resultado = numeroUno * numeroDos;
	}

	if(numeroUno > numeroDos)
	{
		resultado = numeroUno - numeroDos;
	}

	if(numeroUno < numeroDos)
	{
		resultado = numeroUno + numeroDos;
	}

	document.write("El resultado es: " + resultado);*/
	
}

function Nivel2Ej5() {
	
	var mes;

	mes = prompt ("Ingrese un mes");

	switch(mes)
	{
		case "diciembre":
		alert("Se vienen las fiestas!!");
		break;

		case "enero":
		alert("Comienza el año");
		break;

		default:
		alert("No es diciembre ni enero");
		break;

	}

	/*var dia;

	dia = prompt("Ingrese un día de la semana")
	{
		switch(dia)
		{
			case "lunes":
			case "martes":
			case "miércoles":
			case "jueves":
			case "viernes":

			alert("a trabajar");
			break;
			
			case "sábado":
			case "domingo":

			alert("Es fin de semana");
			break;

		}

	}*/

}

function Nivel3Ej6() {

	var peso;
	var contador = 0;
	var maximo;
	var minimo;

	

	while(contador < 3)
	{
		peso = prompt ("Ingrese el peso de un contenedor");
		peso = parseInt(peso);

		while(peso < 0)
		{
			peso = prompt("Error. Ingrese un número mayor a 0");
			peso = parseInt(peso);
		}

		if(contador == 0)
		{
			maximo = peso;
			minimo = peso;
		}

		else
		{
			if(peso > maximo)
			{
				maximo = peso;
			}
			if(peso < minimo)
			{
				minimo = peso;
			}

		}

		contador ++;
		
	}

	alert("El peso mínimo ingresado es " + minimo + " y el peso máximo ingresado es " + maximo);
	
	/*var contador = 0;
	var importe;
	var mayorImporte;
	var menorImporte;

	while(contador < 24)
	{
		importe = prompt("Ingrese un importe");

		if(importe > 0)
		{
			if (contador == 0)
			{	
				mayorImporte = importe;
				menorImporte = importe;
				
			}

			else
			{
				if(importe > mayorImporte)
				{
					mayorImporte = importe;

				}
				if(importe < menorImporte)
				{
					menorImporte = importe;

				}

			}

			contador ++;
		}

		else
		{
			alert("Número inválido");
		}		
	} 

	document.write("El mayor importe es " + mayorImporte + "<br>");
	document.write("El menor importe es " + menorImporte + "<br>");*/

}

function Nivel3Ej7() {

	var edad;
	var sexo;
	var contador = 0;
	var promedio;
	var suma = 0;
	var minimo;
	var hombresMayoresAVeinte = 0;
	
	while(contador < 5)
	{
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		
		while(!(edad > 0 && edad < 100))
		{
			edad = prompt("Error. Ingrese una edad válida");
			edad = parseInt(edad);

		}

		sexo = prompt("Ingrese su sexo");

		while(!(sexo == "f" || sexo == "m"))
		{
			sexo = prompt("Error. Ingrese m para masculino o f para femenino")

		}

		if(contador == 0 || edad < minimo)
		{
			minimo = edad;		
		}

		if(sexo == "m" && edad >= 20)
		{
			hombresMayoresAVeinte = hombresMayoresAVeinte + 1;

		}

		suma = suma + edad;
		contador ++;

	}

	promedio = suma / 3;

	alert("El promedio es " + promedio + "\nLa edad más baja es " + minimo + "\nLa cantidad de hombres mayor a veinte años es " + hombresMayoresAVeinte);

	/*var nota;
	var sexo;
	var contador = 0;
	var sumaNotas = 0;
	var promedioNotas;
	var menorNota;
	var hombresAprobados = 0;

	while(contador < 5)
	{
		nota = prompt("Ingrese su nota " + (contador+1));
		nota = parseInt(nota);		
		
		while(!(nota >= 0 && nota <= 10))
		{
			nota = prompt("Error. Ingrese su nota");
			nota = parseInt(nota);
			
		}

		sexo = prompt("Ingrese su sexo " + (contador+1));

		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error. Ingrese su sexo"); 

		}

		if(contador == 0 || nota < menorNota)
		{
			menorNota = nota;
		}

		if(sexo=="m" && nota >= 6)
		{
			hombresAprobados = hombresAprobados + 1;
		}

		sumaNotas = sumaNotas + nota;

		contador ++;


	}
	
	promedioNotas = sumaNotas / contador;

	alert ("El promedio de notas es " + promedioNotas + "\nLa menor nota es " + menorNota + "\nLos hombres con nota mayor o igual a 6 son " + hombresAprobados);*/


}

function Nivel4Ej8() {
	
	var contador = 0;
	var numero;
	var respuesta = "si";
	var contadorPares = 0;
	var promedio;
	var sumaNumeros = 0;
	var maximo;
	var minimo;

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un número positivo");
		numero = parseInt(numero);

		while (numero < 0)
		{
			numero = prompt("Error.Ingrese un número positivo");
			numero = parseInt(numero);

		}

		if(numero % 2 == 0)
		{
			contadorPares = contadorPares + 1;

		}

		if (contador == 0)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero > maximo)
			{
				maximo = numero;
			}
			if (numero < minimo)
			{
				minimo = numero;
			}

		}
		
		respuesta = prompt("Desea continuar?");
		sumaNumeros = sumaNumeros + numero;
		contador ++;
	}

	
	promedio = sumaNumeros / contador;

	document.write("La cantidad de números pares es " + contadorPares + "<br>");
	document.write("El promedio de todos los números ingresados es " + promedio + "<br>");
	document.write("La suma de todos los números es " + sumaNumeros + "<br>");
	document.write("El número mínimo ingresado es " + minimo + "<br>");
	document.write("El número máximo ingresado es " + maximo + "<br>");
}