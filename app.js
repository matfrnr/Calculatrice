const info = document.querySelector(".infos"); // recuperer le champ texte pour le message d'erreur

const allBtns = document.querySelectorAll("input[type=button]"); // recuperer tous les boutons

// Fonction pour ajouter la valeur d'un bouton au champ de formulaire
function val(resultat) {
  form.fenetre.value = form.fenetre.value + resultat;
}

// Fonction pour effectuer le calcul
function calcule() {
  // verifier si le champ fenetre est vide
  if (form.fenetre.value == "") {
    info.innerText = `Veuillez écrire un chiffre`;
    allBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        info.innerText = "";
      });
    });
  } else {
    // Effectue le calcul
    form.fenetre.value = eval(form.fenetre.value);
    info.innerText = "";
  }
}

// fonction pour vider la fenetre
function suppr() {
  form.fenetre.value = "";
}
