// Le passage par référence

// la doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions#Description

// objectif : modifier la fonction pour qu'elle répercute les changements sur les variables globales (qu'il faudra peut-être modifier aussi)

const transfer = (accountA, accountB, amount, label) => {

    // pas question d'autoriser un découvert
    const success = accountA.balance >= amount;
    
    // si ça passe, on effectue la transaction
    if (success) {
        accountA.balance -= amount;
        accountB.balance += amount;
    }

    // on retourne déjà un objet qui représente la transaction, on ne peut pas retourner en plus le nouveau solde des deux comptes concernés
    return {
        amount: amount,
        timestamp: new Date().toString(),
        success,
        label,
        operator: "O'clock bank Zurich"
    };
}

let aliceAccount = {
        balance: 570
    },
    aliceSavings = {
        balance: 1200
    },
    bobAccount = {
        balance: 850
    };

const firstTransaction = transfer(aliceAccount, bobAccount, 120, 'remboursement commande café');

console.table(firstTransaction);

const secondTransaction = transfer(aliceAccount, bobAccount, 500, 'participation au loyer');

console.table(secondTransaction);

const savingTransaction = transfer(aliceAccount, aliceSavings, 350, 'épargne');

console.table(savingTransaction);