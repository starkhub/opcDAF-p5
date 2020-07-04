function generateQuote() { //FONCTION PRINCIPALE DE GENERATION DE CITATION
    var quoteArray = { //Objet JSON avec pour valeurs des tableaux contenant les morceaux de citations du générateur. On peut ajouter d'autres clés et valeurs sous forme de tableau
        "quotePart0": ["La tristesse  ", "La mélancolie ", "L'obscurité ", "Le crépuscule "],
        "quotePart1": ["envahit l'horizon ", "gagne toujours ", "est mon quotidien ", "est inévitable "],
        "quotePart2": ["pourquoi continuer ", "sans qu'on ne puisse rien changer ", "nul ne peut rien y changer ", "il est inutile d'espérer "],
        "quotePart3": ["alors autant se rendre à l'évidence ", "il n'y a juste qu'à se laisser aller ", "inutile de nier l'évidence ", "aucune alternative possible "],
        "quotePart4": ["le chaos l'emporte toujours...", "l'anarchie règnera sans fin...", "la nuit sera notre seul avenir...", "l'hiver arrive, l'hiver est là..."]
    };
    var count = Object.keys(quoteArray).length; //On compte la longueur de clés dans l'objet JSON
    var fullQuote = ""; //On initialise la variable qui contiendra la citation complète

    for (i = 0; i < count; i++) { //Initialisation boucle pour traiter les itérations quoteArray
        let quoteSubArrayLength = quoteArray['quotePart' + i].length - 1; //On compte la longueur des tableaux de morceaux de citations
        fullQuote += quoteArray['quotePart' + i][Math.floor(Math.random() * quoteSubArrayLength)]; //On sélectionne aléatoirement un morceau de phrase dans le tableau et on concatène les morceaux ensemble
    }
    let d = document.createElement("div"); //Initialisation variable d correspondant à un DIV
    d.className = "singleQuoteDiv"; //On affecte la classe "singleQuoteDiv" à la variable d
    document.getElementById("quoteContainer").appendChild(d); //On insert le DIV dans le conteneur de citation déjà existant
    d.innerHTML = fullQuote; //On insert la citation dans le DIV singleQuoteDiv
}