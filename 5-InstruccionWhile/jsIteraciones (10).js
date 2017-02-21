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

		sexo = prompt ("Ingrese su sexo");













		respuesta = prompt("Ingrese si para continuar");
	}
	
	promedioNota = sumadorNota / contador;

	//alert("Funciona");
	document.write(promedioNota);

}//FIN DE LA FUNCIÓN