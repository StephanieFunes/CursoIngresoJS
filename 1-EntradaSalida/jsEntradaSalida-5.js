/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;

	var edad;

	nombre = document.getElementById("elNombre").value; //Toma datos por ID
	edad = document.getElementById("laEdad").value;

	alert ("Usted se llama " + nombre + " y tiene " + edad + " años");
}

