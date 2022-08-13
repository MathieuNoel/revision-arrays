// L'affectation par décomposition (pff, les noms français...)

// la doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition

// objectif : échanger les valeurs de 2 variables en une seule ligne (et sans la variable temp)

let a = 'b', b = 'a';

// let temp = a;
// a = b;
// b = temp;

({a, b} = {a : 'a', b : 'b'});
//ou 
// [a,b] = [b,a];

console.table({a, b});