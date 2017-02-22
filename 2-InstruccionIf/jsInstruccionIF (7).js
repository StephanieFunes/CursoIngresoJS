function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
	var soltero;
	var casado;
	var divorciado;

	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	if(edad < 18 && estadoCivil != soltero){

		alert("Usted es muy pequeño para no ser soltero");
	}


	
	


}//FIN DE LA FUNCIÓN
