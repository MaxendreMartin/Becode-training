<?php
if (isset($_GET['note'])){
    if($_GET["note"]<=4){
        echo "Ce travail est vraiment mauvais. Quel gamin stupide! <br>";
    }else if($_GET["note"]>=5 && $_GET["note"]<=9){
        echo "Ce n'est pas suffisant. Il faut étudier d'avantage. <br>";
    }else if($_GET["note"]==10 ){
        echo "À peine assez! <br>";
    }else if($_GET["note"]>=11 && $_GET["note"]<=14){
        echo "Pas mal! <br>";
    }else if($_GET["note"]>=15 && $_GET["note"]<=18){
        echo "Bravo, bravissimo! <br>";
    }else{
        echo "Trop beau pour être vrai affrontez le tricheur! <br>";
    }
}
?>

<form method="GET" action="">
	<label for="note">Entrez votre note sur /20</label><br>
	<input type="number" name="note">
	<input type="submit" name="submit" value="Greet me now">
</form>