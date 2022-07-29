// Manipuler des strings

// split : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
// join : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join

// objectif : coder puis décoder un message secret avec la stéganographie (kesséssé ? GIYF)

const secret = "Les chats gouvernent le monde";

const steg1 = phrase => {
    // ici, il va falloir
    // - découper la phrase en une série de caractères
    // - intercaler le caractère "o" (comme olive, bien sûr)
    // - reformer la nouvelle phrase et la retourner
    // bonus : en une seule ligne, siouplait
}

let steggedPhrase = steg1(secret);

const unsteg1 = phrase => {
    // une phrase codée, c'est bien, mais il faut pouvoir la décoder
    // je vous laisse décider de quoi faire ici
    // bonus : one-liner, please
}

let unsteggedPhrase = unsteg1(steggedPhrase);

// assert vérifie la condition passée en premier argument et lance une erreur si elle est fausse : pratique 💡
console.assert(unsteggedPhrase === secret, `Ça n'a pas marché comme prévu : la phrase, une fois codée et décodée, est devenue ${unsteggedPhrase}`);