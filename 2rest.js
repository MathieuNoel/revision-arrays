// Les paramètres du reste (oui, c'est moche comme nom)

// la doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste

// objectif : permettre à la fonction d'accepter un nombre variable d'arguments

const data = [
    [3, 8, 29],
    ['VOILÀ ! ', 'as-tu ', 'vu ?', ' as-tu vu les ', 'quenouilles ? ', 'Dans ces quenouilles, ', 'il y a des grenouilles'],
    ['le résultat de 3 + 11 est ', 3, 11, '... ou pas'],
    [3, 11, ' est le résultat de 3 + 11'],
    ['À ', 'ROULETTES !'],
    ['il faut que ', 'ça marche avec ', 'plus de 3 arguments aussi', ' ! CECI DOIT S\'AFFICHER']
];

const makePlusEvenGreater = ( ...data) => { //(a, b, c)

    // const args = [a, b, c];
    
    let result, arg;
    while (arg = args.shift()) {
        if (result === undefined) {
            result = arg;
        } else {
            result += arg;
        }
    }
    
    return result;
};

for (let set of data) {
    console.log(makePlusEvenGreater(...set));
}
