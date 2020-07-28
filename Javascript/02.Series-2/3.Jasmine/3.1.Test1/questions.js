let tailleString = (texte) => {
    return texte.length;
};
let remplaceECar = (texte) => {
    let a = texte.indexOf("e");
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
};
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
};
let afficherCar5 = (texte) => {
    return texte[4];
};
let afficher9Car = (texte) => {
    return texte.substr(0, 9);

    return recup;
};
let majusculeString = (texte) => {
    return texte.toUpperCase();
};
let minusculeString = (texte) => {
    return texte.toLowerCase();
};
let SupprEspaceString = (texte) => {
    return texte.trim();
};
let IsString = (texte) => {
    return typeof texte.valueOf() === "string";
};

let AfficherExtensionString = (texte) => {
    var extension = texte.split(".").pop();
    return extension;
};
let NombreEspaceString = (texte) => {
    nbesp = texte.split(" ").length - 1;
    return nbesp;
};
let InverseString = (texte) => {
    return texte.split("").reverse().join("");
};

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {
    return Math.pow(x, y);
};
let valeurAbsolue = (nombre) => {
    return Math.abs(nombre);
};
let valeurAbsolueArray = (array) => {
    let array2 = array.map(Math.abs, array);
    return array2;
};
let sufaceCercle = (rayon) => {
    let surface = Math.PI * rayon * rayon;
    let surf = Math.round(surface);
    return surf;
};
let hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
};
let calculIMC = (poids, taille) => {
    return Math.floor((poids / taille ** 2) * 100) / 100;
};
