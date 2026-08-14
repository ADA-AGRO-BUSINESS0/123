function commander(produit, couleur, prix, tailleName) {

    // Récupérer la taille sélectionnée
    const tailleSelectionnee = document.querySelector(
        `input[name="${tailleName}"]:checked`
    );

    // Vérifier si une taille a été choisie
    if (!tailleSelectionnee) {

        alert(
            "⚠️ Veuillez sélectionner une taille avant de commander."
        );

        return;
    }

    // Récupérer la valeur de la taille
    const taille = tailleSelectionnee.value;


    // Numéro WhatsApp de GENIE
    const numero = "221770625912";


    // Message de commande
    const message =
        `Bonjour GENIE 👋\n\n` +
        `Je souhaite commander :\n\n` +
        `🛍️ Produit : ${produit}\n` +
        `🎨 Couleur : ${couleur}\n` +
        `📏 Taille : ${taille}\n` +
        `💰 Prix : ${prix}\n\n` +
        `Merci !`;


    // Création du lien WhatsApp
    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;


    // Ouvrir WhatsApp
    window.open(url, "_blank");
}