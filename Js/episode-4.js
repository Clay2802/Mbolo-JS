// Episode 4
// Programme permettant de permuter les valeurs de deux variables et les afficher
let a = 5;
let b = 10;

console.log("Avant permutation : a =", a, "b =", b);

[b, a] = [a, b];

console.log("Après permutation : a =", a, "b =", b);
