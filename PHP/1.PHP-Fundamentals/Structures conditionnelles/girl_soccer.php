<?php
if (isset($_GET['age'])){

    if($_GET["age"]>=21 && $_GET["age"]<=40){
        if($_GET ["gender"] === "girl"){
        echo  "Bienvenue dans l'équipe! ";
    }else{
        echo "Désolé, vous ne répondez pas aux critères. ";
    }
    }


}

?>

<form method="get" action="">
	<label for="age">Entrez votre âge</label><br>
    <label for="gender">Êtes vous un homme ou une femme?</label>
            <label for="male"> Male<input type="radio" name="gender" value='male'></label>
            <label for="girl"> Girl<input type="radio" name="gender" value='girl'></label><br>
	<input type="" name="age">
	<input type="submit" name="submit" value="Greet me now">
</form>