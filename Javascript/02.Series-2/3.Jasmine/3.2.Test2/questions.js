let CreationTableauLangages = () => {
    let array = ["Html", "CSS", "Java", "PHP"];
    return array;
};

let CreationTableauNombres = () => {
    let array = [0, 1, 2, 3, 4, 5];
    return array;
};

let RemplacementElement = (langages) => {
    var i = langages.indexOf("Java");
    langages[i] = "Javascript";
    return langages;
};

let AjoutElementLangages = (langages) => {
    langages.push("Ruby", "Python");
    return langages;
};

let AjoutElementNombres = (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;
};

let SuppressionPremierElement = (langages) => {
    langages.shift();
    return langages;
};

let SuppressionDernierElement = (langages) => {
    langages.pop();
    return langages;
};

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
    let arr = reseaux_sociaux_chaine;
    arr = arr.split(",");
    return arr;
};

let ConversionTableauChaine = (langages) => {
    let arr = langages.join(",");
    return arr;
};

let TriTableau = (reseaux_sociaux) => {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
};

let InversionTableau = (reseaux_sociaux) => {
    reseaux_sociaux.reverse();
    return reseaux_sociaux;
};
