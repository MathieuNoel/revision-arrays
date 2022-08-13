// Méthode map

// la doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map

// objectif : écrire tous les noms de famille en majuscule pour l'affichage
// MAIS
// 1) sans toucher à profs, aucune donnée ne doit être modifiée dans la variable
// 2) sans faire d'autre affectation, la variable profs suffit

const profs = [
    ['simon', 'martin'],
    ['tony', 'tiratay'],
    ['alexis', 'vincent'],
    ['yann', 'guilloux'],
    ['philippe', 'candille'],
    ['jean-denis', 'vauguet'],
    ['jean', 'pruliere']
];
// Le principe est de découper la contruction

// 1. on commence par transformer le nom et le retourner
console.table(profs.map(prof => prof[1].toUpperCase()));

// 2. on fait la même opération mais en retournant l'objet complet ce coup si
// On fait remarquer que cela a aussi changer le tableau contenu dans la variable "profs" ---> à cause des références
console.table(profs.map(prof => {
    prof[1] = prof[1].toUpperCase();
    return prof;
}));

console.table(profs.map(a => [a[0], a[1].toUpperCase()]));