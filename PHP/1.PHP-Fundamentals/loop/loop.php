<?php
$pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');
//var_dump($pronouns);
//print_r($pronouns);
//echo $pronouns;
foreach($pronouns as $key){
    if ($key == "He/She"){
        echo "$key codes <br>";
    }else{
        echo "$key code <br>";
    }
}

//$amount_of_lines = 1 ;
//while( $amount_of_lines <= 100 ){
//   echo  $amount_of_lines . ".: Je ne regarderai pas les mouches voler quand j'apprends PHP. <br />" ;
    // écriture abrégée pour 
    // $amount_of_lines = $amount_of_lines +1; 
//    $amount_of_lines ++;
//}

//for ($amount_of_lines = 1; $amount_of_lines <= 100; $amount_of_lines ++)
//{
//    echo $amount_of_lines . ". : I shall not watch flies fly when I'm learning PHP.<br />";
//}

$number = 1 ;
while($number <= 120){
    echo "$number <br>";
    $number ++;
}

for ($nbr = 1; $nbr <= 120; $nbr ++){
    echo "$nbr <br>";
}

$becode = array ("François", "Calvin", "Gerardo", "Stephane", "Simon", "Robin", "Loic", "Marie");
    foreach ($becode as $becode){
        echo "$becode /" ;
    }

$country = array ("Belgique", "Espagne", "Angleterre", "Italie", "France", "Allemagne", "Chili", "Canada", "Pays-Bas", "Japon");
    //foreach ($country as $country){
    //    echo "$country <br>";
    //}
?>

<html><br>
<label for="country">Choisis un pays:</label>
<select name="Pays">
<?php
    foreach ($country as $count){
        echo "<option value='$count'>$count</option>";
    }
?>
</select>
</html>

<?php
$countryabre = [
    "BE" => "Belgique",
    "ES" => "Espagne",
    "ANG" => "Angleterre",
    "IT" => "Italie",
    "FR" => "France",
    "GER" => "Allemagne",
    "CHL" => "Chili",
    "CAN" => "Canada",
    "NL" => "Pays-Bas",
    "JPN" => "Japon"
];
?>

<html><br>
<label for="countryabre">Choisis un pays:</label>
<select name="Pays" id="">
    <?php
    foreach($countryabre as $key => $value){
        echo "<option value='$key'>$value</option>";
    }
    ?>
</select>
</html>

