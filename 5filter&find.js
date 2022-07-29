// Filter & find

// La doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
//        : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find

// Objectif :
// 1) Obtenir le cocktail à l'id 10
// 2) Récupérer tous les cocktails avec du "citron vert" ou qui ont le tag "sucré"
// Structure des données :
// {
//     "id": "",
//     "name": "",
//     "type": "",
//     "ingredients": [
//     ],
//     "tags": [
//     ]
// }
//

const data = [{ "id": "1", "name": "mojito", "type": "longdrink", "ingredients": ["menthe", "citron vert", "sucre", "rhum", "eau gazeuse", "angostura"], "tags": ["classique", "frais"] }, { "id": "2", "name": "Gin Fizz", "type": "longdrink", "ingredients": ["citron vert", "sucre", "Gin", "eau gazeuse"], "tags": ["classique", "frais"] }, { "id": "3", "name": "Old fashioned", "type": "shortdrink", "ingredients": ["bourbon", "sucre", "angostura", "zeste d'orange"], "tags": ["classique", "fort"] }, { "id": "4", "name": "Sweety", "type": "shooter", "ingredients": ["soho", "champagne"], "tags": ["doux", "chic"] }, { "id": "5", "name": "Bougie d'anniversaire", "type": "shooter", "ingredients": ["Sirop de fraise", "Curaçao", "Cointrau"], "tags": ["flambé", "sucré"] }, { "id": "6", "name": "Schtroumpf", "type": "shooter", "ingredients": ["Sirop de pèche", "Vodka", "Curaçao"], "tags": ["sucré"] }, { "id": "7", "name": "Madelaine", "type": "shooter", "ingredients": ["Cointreau", "Amaretto", "Liqueur de café (optionel)", "Jus d'ananas"], "tags": ["sucré"] }, { "id": "8", "name": "Loft", "type": "shooter", "ingredients": ["Baileys", "Malibu", "Sirop de caramel"], "tags": ["sucré"] }, { "id": "9", "name": "Martini", "type": "shortdrink", "ingredients": ["Vermouth", "Gin", "Olive"], "tags": ["classique", "fort"] }, { "id": "10", "name": "Mimosa", "type": "longdrink", "ingredients": ["Champagne", "Jus d'orange"], "tags": ["classique", "frais", "petit déjeuner"] }, { "id": "11", "name": "Bellini", "type": "longdrink", "ingredients": ["Champagne", "Purée de pêche"], "tags": ["classique", "frais", "petit déjeuner"] }];
