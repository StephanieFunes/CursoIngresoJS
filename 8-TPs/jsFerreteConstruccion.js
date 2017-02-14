/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var base;
	var altura;
	var perimetro;

	base = document.getElementById('Largo').value;
	altura = document.getElementById('Ancho').value;
	base = parseInt(base);
	altura = parseInt(altura);

	perimetro = (2 * altura * base) * 3;

	alert(perimetro); 
}

function Circulo () 
{
	var radio;
	var circulo;

	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);

	circulo = (2 * 3.14 * radio) * 3;
	
	alert(circulo);
}

function Materiales () 
{
	var base;
	var altura;

	var bolsaDeCemento;
	var bolsaDeCal;

	base = document.getElementById('Largo').value;
	altura = document.getElementById('Ancho').value;
	base = parseInt(base);
	altura = parseInt(altura);

	bolsaDeCemento = 2 * base * altura;
	bolsaDeCal = 3 * base * altura;

	alert("Se necesitan " + bolsaDeCemento + " bolsas de cemento y " + bolsaDeCal + " bolsas de cal");
}