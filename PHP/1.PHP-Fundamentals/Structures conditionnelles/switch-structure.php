<?php
if (isset($_GET['note'])){
    $note = $_GET["note"];
        switch ($note){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                echo ("Ce travail est vraiment mauvais. Quel gamin stupide!");
                break;

            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                echo ("Ce n'est pas suffisant. Il faut étudier d'avantage.");
                break;

            case 10:
                echo ("À peine assez!");
                break;

            case 11:
            case 12:
            case 13:
            case 14:
                echo ("Pas mal!");
                break;

            case 15:
            case 16:
            case 17:
            case 18:
                echo ("Bravo, bravissimo!");
                break;

            case 19:
            case 20:
                echo ("Trop beau pour être vrai affrontez le tricheur!");

        }
}
?>


<form method="GET" action="">
	<label for="note">Entrez votre note sur /20</label><br>
	<input type="number" name="note">
	<input type="submit" name="submit" value="Greet me now">
</form>