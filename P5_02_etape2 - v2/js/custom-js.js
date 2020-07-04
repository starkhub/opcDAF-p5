function resetGenerator() { //FONCTION DE REINITIALISATION DU GENERATEUR
    document.getElementById("quoteContainer").innerHTML = ""; //On vide le conteneur de citations via son ID
}

function generateQuote() {

    resetGenerator();//On vide le conteneur de citations
    var quoteQuantity = document.getElementById("quoteQuantity").value; //On récupère la valeur du choix du nombre de citations désirées
    var generatorToggle = document.getElementById("generatorToggle"); //On récupère l'élément bouton "interrupteur"
    if (generatorToggle.checked == true) { //On vérifie si le bouton de sélection de type de citation est coché ou non (il s'agit d'un input déguisé via le css), le cas échéant on choisit le pessimiste
        var quoteArray = { //Objet JSON avec pour valeurs des tableaux contenant les morceaux de citations PESSIMISTE du générateur. On peut ajouter d'autres clés et valeurs sous forme de tableau
            "quotePart0": ["La tristesse  ", "La mélancolie ", "L'obscurité ", "Le crépuscule "],
            "quotePart1": ["envahit l'horizon ", "gagne toujours ", "est mon quotidien ", "est inévitable "],
            "quotePart2": ["pourquoi continuer ", "sans qu'on ne puisse rien changer ", "nul ne peut rien y changer ", "il est inutile d'espérer "],
            "quotePart3": ["alors autant se rendre à l'évidence ", "il n'y a juste qu'à se laisser aller ", "inutile de nier l'évidence ", "aucune alternative possible "],
            "quotePart4": ["le chaos l'emporte toujours...", "l'anarchie règnera sans fin...", "la nuit sera notre seul avenir...", "l'hiver arrive, l'hiver est là..."]
        };
    } else { //Si le bouton n'est pas coché on choisit l'optimiste
        var quoteArray = { //Objet JSON avec pour valeurs des tableaux contenant les morceaux de citations OPTIMISTE du générateur. On peut ajouter d'autres clés et valeurs sous forme de tableau
            "quotePart0": ["L'espoir ", "L'amour ", "La vie ", "La lumière "],
            "quotePart1": ["est en chacun de nous ", "est source de tout ", "est nécessaire ", "est la base "],
            "quotePart2": ["même quand y croit plus ", "même quand on doute ", "malgré les épreuves ", "quand on y croit vraiment "],
            "quotePart3": ["rien n'est impossible ", "tout peut être réalisable ", "on peut tout surmonter ", "on trouve la force "],
            "quotePart4": ["et on peut trouver le bonheur.", "et le bonheur nous trouve.", "et on peut dire alors qu'on est heureux.", "et tout va pour le mieux."]
        };
    }

    for (let i = 0; i < quoteQuantity; i++) //Initialisation d'une boucle à partir de 0 jusqu'au chiffre choisi par l'utilisateur "quoteQuantity"
    {
        var count = Object.keys(quoteArray).length; //On compte la longueur de clés dans l'objet JSON
        var fullQuote = ""; //On initialise la variable qui contiendra la citation complète

        for (let j = 0; j < count; j++) { //Initialisation boucle pour traiter les itérations quoteArray
            var quoteSubArrayLength = quoteArray['quotePart' + j].length - 1; //On compte la longueur des tableaux de morceaux de citations
            fullQuote += quoteArray['quotePart' + j][Math.floor(Math.random() * quoteSubArrayLength)]; //On sélectionne aléatoirement un morceau de phrase dans le tableau et on concatène les morceaux ensemble
        }
        let d = document.createElement("div"); //Initialisation variable d correspondant à un DIV
        d.className = "singleQuoteDiv"; //On affecte la classe "singleQuoteDiv" à la variable d
        document.getElementById("quoteContainer").appendChild(d); //On insert le DIV dans le conteneur de citation déjà existant
        d.innerHTML = fullQuote; //On insert la citation dans le DIV singleQuoteDiv
    }

}