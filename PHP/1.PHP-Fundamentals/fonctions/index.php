<?php
//$str= "According to a researcher (sic) at Cambridge University , it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place. The rest can be a total mess and you can still read it without problem. This is because the human mind does not read every letter by itself but the word as a whole .";

//$str= explode(" ", $str);

//foreach ($str as $word){
	
//	echo str_shuffle($word)." ";
//}

//Première lettre en majuscule
function majuscule($prenom){
    $prenom[0] = strtoupper($prenom[0]);
    return ($prenom);
} echo "<p>".majuscule("emile")."</p>";

echo "<hr>";

// Date
$date = date("d-m-Y");
$heure = date("H:i");
Print("Nous sommes le $date et il est $heure");

echo "<hr>";

//Exercice  somme
function somme($a,$b){
    if(is_numeric($a) && is_numeric($b)){
        return $a +$b;
    }else{
        echo "Error: argument is the not a number.";
    }
}
$a = 4;
$b = 32;
print_r($a+$b);
echo "<hr>";

//acronyme
function acronyme ($acr){
    $acr = explode (" ",$acr);
    $arr = [];
        foreach($acr as $mot){
            ucfirst($mot[$i]);
            $arr [] = $mot[0];
        }
        $arr = implode(" ",$arr);
        return $arr;
}
echo '<pre>';
print_r(acronyme("In code we trust!"));
echo '</pre>';
echo "<hr>";

//remplace les lettres «a» et «e» par «æ»
function replace($string){
    $rel = "/ae/";
    $string = preg_replace ($rel, "æ", $string);
    return $string;
}
echo '<pre>';
print_r(replace("caecotrophie, chaenichthys"));
echo '</pre>';
echo "<hr>";

//remplace « æ » par « ae »
function replace2($string){
    $rel = "/æ/";
    $string = preg_replace ($rel, "ae", $string);
    return $string;
}
echo '<pre>';
print_r(replace2("microsphæra, sphærotheca"));
echo '</pre>';
echo "<hr>";

//renvoyer des messages à un utilisateur
function feedback($message, $value ="info"){
    $msg = ucfirst($value);
    return "<div class='$value'>$msg: $message.</div>";
}
echo feedback("Incorrect email address", "error");
echo "<hr>";

//générateur de mots aléatoires
function genererChaineAleatoire($longueur = 10)
{
 $caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 $longueurMax = strlen($caracteres);
 $chaineAleatoire = '';
 for ($i = 0; $i < $longueur; $i++)
 {
 $chaineAleatoire .= $caracteres[rand(0, $longueurMax - 1)];
 }
 return $chaineAleatoire;
}
echo "mot générer aléatoirement <br>";
echo genererChaineAleatoire(rand(1,5))."<br>";
echo genererChaineAleatoire(rand(7,15));
echo "<hr>";

//Dé-majuscule la chaîne
$strCapitale = "STOP YELLING I CAN'T HEAR MYSELF THINKING!!";
echo strtolower($strCapitale);
echo "<hr>";

//fonction personnalisée
function calculate_cone_volume($height,$r){
   echo "Le volume d'un cône dont le rayon est de " .$r. " et la heuteur de " .$height. 
    " = " .$r * $r * 3,14 * $height * (1/3). "cm <sup> 3 </sup> <br>";
}
calculate_cone_volume(9,22);
?>