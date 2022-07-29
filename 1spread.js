// La décomposition (sans l'odeur 😏)

// la doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition

// objectif : modifier le for pour utiliser la décomposition

const data = [
    [3, 8, 29],
    ['as-tu ', 'vu les ', 'quenouilles ?'],
    ['le résultat de 3 + 11 est ', 3, 11],
    [3, 11, ' est le résultat de 3 + 11'],
    ['il faut que ', 'ça marche avec ', 'plus de 3 éléments aussi', ' ! CECI NE DOIT PAS S\'AFFICHER ']
];

const makePlusGreatAgain = (a, b, c) => {
    return a + b + c;
};

for (let i = 0; i < data.length; i++) {
    let set = data[i];
    console.log(makePlusGreatAgain(set[0], set[1], set[2]));
}

// bonus : modifier le for pour une écriture plus moderne, appropriée pour les arrays