// Episode 11
// Demande à l'utilisateur d'entrer un nombre
const nombre = prompt("Entrez un nombre :");

alert(`Table de multiplication de ${nombre} :`);

// Affiche la table de multiplication
for (let i = 1; i <= 10; i++) {
  let resultat = nombre * i;
  alert(`${nombre} x ${i} = ${resultat}`);
}