/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;

	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;

	alert("La suma es "+ parseInt(numero1)+parseInt(numero2));

}

	/*var numero1;
	var numero2;
	var resultado;

numero1 = document.getElementById('numeroUno').value;
numero2 = document.getElementById('numeroDos').value;

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
resultado = numero1 + numero2;

alert ("La suma de los números ingreados es: " + resultado);

*/



