// Manipuler des strings

// split : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
// join : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join

// objectif : coder puis décoder un message secret avec la stéganographie (kesséssé ? GIYF)

const secret = "Les chats gouvernent le monde";

const steg1 = phrase => {
    // ici, il va falloir
    // - découper la phrase en une série de caractères
    // const splited = secret.split('')
    // - intercaler le caractère "o" (comme olive, bien sûr)
    // const joined = splited.join('o')
    // - reformer la nouvelle phrase et la retourner
    // return joined
    // bonus : en une seule ligne, siouplait
    
    return secret.split('').join('o')
    
}
// console.log(steg1);
let steggedPhrase = steg1(secret);

const unsteg1 = phrase => {
    // une phrase codée, c'est bien, mais il faut pouvoir la décoder
    // je vous laisse décider de quoi faire ici     
    // bonus : one-liner, please
    return steggedPhrase.split('o').join('')

    // solution de Yann
    // return steggedPhrase.split('').map((elem, i)=>(i%2)?'':elem).join('');
}

let unsteggedPhrase = unsteg1(steggedPhrase);

// assert vérifie la condition passée en premier argument et lance une erreur si elle est fausse : pratique 💡
console.assert(unsteggedPhrase === secret, `Ça n'a pas marché comme prévu : la phrase, une fois codée et décodée, est devenue ${unsteggedPhrase}`);