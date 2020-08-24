<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Générateur de mot d'excuse.">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Mot d'excuse</title>
</head>
<body>

    <?php
        $name = $_POST["name"];
        $gender = $_POST["gender"];
        $prof = $_POST["prof"];
        $reason = $_POST["reason"];
        $text = NULL;

        $day = array("Lundi","Mardi","Mercredi","Jeudi","Vendredi");
        $month = array("Septembre","Octobre","Novembre","Décembre","Janvier","Février","Mars","Avril","Mai","Juin");
        $date = $day[date("w")]. ", le " .date("d")." ".$month[date("n")]." ".date("Y");
            switch($reason){
                case "maladie":
                    $excuse = "a la diarrhée aigue";
                break;

                case "mort":
                    $excuse = "pleure la mort de sa console de jeux";
                break;

                case "activite":
                    $excuse = "est au pôle nord, parti rencontrer papa Noël";
                break;

                case "foulage":
                    $excuse = "N’a pas pu venir, s’est foulé le cerveau.";
                break;
            }

            if(isset($_POST["name"]) && isset($_POST["gender"]) && isset($_POST["prof"]) && isset($_POST["reason"])){
                if ($gender == "fille"){
                    $absence = "absente";
                    $pronom = "elle";
                }else{
                    $absence = "absent";
                    $pronom = "il";
                }

                $mot = "Bonjour $prof,<br>
                Veuillez excuser mon enfant $name, qui sera $absence et ne viendra pas à l'école le $date.
                $name, est dans l'incapacité de se rendre à l'école parce qu' $pronom $excuse. <br>
                Par ailleurs, nous pouvons, si vous le souhaitez, nous rencontrer pour évoquer sa scolarité.<br>
                Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.";

            }
        
    ?>
    <div class="container">
            <div class="row">

    <h1>Générateur de mot d'excuse pour votre enfant</h1>

    <form method="POST" class=""> 
    <!--nom de l'enfant-->
    <label for="name">Nom de l'enfant </label><input type="" name="name"><br><br>
    <!--gender-->
    <label for="gender">Sexe de l'enfant </label>
    <input type="radio" name="gender" value="fille"><label for="gender">Fille</label>
    <input type="radio" name="gender" value="fils"><label for="gender">Garçon</label><br><br>
    <!--prof--> 
    <label for="prof">Nom du professeur </label><input type="" name="prof"><br><br>
    <!--raisons-->
    <label for="reason">Raison</label><br>
    <input type="radio" name="reason" value="maladie"><label for="maladie">Maladie </label><br>
    <input type="radio" name="reason" value="mort"><label for="mort">Décès </label><br>
    <input type="radio" name="reason" value="activite"><label for="activite">Activité extra-scolaire </label><br>
    <input type="radio" name="reason" value="foulage"><label for="foulage">Autre </label><br><br>
    <!--envoyer-->
    <input type="submit" value="Envoyer">
    </form>
            <?php echo $mot; ?>


            </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>