/*function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var random;

	random = Math.floor(Math.random() * 10) + 1;

	if(random >8)
		{
			alert(random + " = Excelente");
		}

	if(random > 3 && random < 9) 
		{
			alert(random + " = Aprobó");
		}

	if(random < 4)
		{
			alert(random + " = Vamos, la próxima se puede");
		}
	

}//FIN DE LA FUNCIÓN*/

 function Mostrar()
{
	var random;

	random = Math.floor(Math.random() * 10) + 1;

	if(random > 8)
	{
		alert(random + " = Excelente");
	}
	else if(random < 4)
	{
		alert(random + " = Vamos, la próxima se puede");
	}
	else
	{
		alert(random + " = Aprobó");
	}
	
}