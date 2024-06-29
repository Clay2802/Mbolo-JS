// episode 9
// Demande la moyenne de l'élève
let moyenne = prompt("Entrez la moyenne de l'élève (entre 0 et 20):");
// Vérifie la mention en fonction de la moyenne
if (moyenne >= 16) {
  mention = "Excellent";
} else if (moyenne >= 14) {
  mention = "Très bien";
} else if (moyenne >= 12) {
  mention = "Bien";
} else if (moyenne >= 10) {
  mention = "Assez-Bien";
} else {
  mention = "Passable";
}

// Affiche la mention en console
alert("La mention de l'élève est:",mention);