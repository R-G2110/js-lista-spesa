/*Passaggi:
1. Inizializzazione del contatore.
2. Mettere (i < lista.length) come condizione del ciclo while.
3. Stampare lista[i].
4. Aumentare il contatore.
*/
const listItems = document.getElementById('list-items');
const lista = [
	'pane',
	'latte',
	'uova',
	'birra',
	'sale',
	'zucchero',
	'acqua'
];

//1. Inizializzazione del contatore.
let i = 0;

//2. Mettere (i < lista.length) come condizione del ciclo while.
while (i < lista.length){
	const items = lista[i];

	//3. Stampare lista[i].
	console.log(items);
	listItems.innerHTML += `<li class="item">${items}</li>`;

	//4. Aumentare il contatore.
	i++;
}
