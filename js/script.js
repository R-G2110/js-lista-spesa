/*Passaggi:
1. Inizializzazione del contatore.
2. Mettere (i < lista.length) come condizione del ciclo while.
3. Stampare lista[i].
4. Aumentare il contatore.
*/

const lista = [
	'pane',
	'latte',
	'uova',
	'birra',
	'sale',
	'zucchero'
];

//1. Inizializzazione del contatore.
let i = 0;

while (i < lista.length){
	const items = lista[i];
	console.log(items);
	i++;
}
