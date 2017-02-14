function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;

	random = Math.floor(Math.random() * 10) + 1;

	alert(random);

}//FIN DE LA FUNCIÓN

/*
Math.floor // devuelve un número entero
Math.floor(Math.random() * 100); // returns a number between 0 and 99
Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10 */