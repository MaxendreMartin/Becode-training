<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicorn</title>
</head>
<body>
    
<?php
    if(isset( $_GET["espece"])){
    
    $gif = "https://media.giphy.com/media/l2JhyVVByOCCzpQcw/giphy.gif";
    $gif = ($_GET["espece"] == "cat") ? "https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif" : $gif;
    $gif = ($_GET["espece"] == "unicorn") ? "https://media.giphy.com/media/mjo3HtlPnEuNq/giphy.gif" : $gif;
        echo "<img src= '$gif'>";
}

$name = $_GET['name'];

    if( empty($name)) {
        echo "Entrez votre nom! ";
    } else {
        echo "Bonjour $name";
    }
?>

<form method="GET" action="">
<p>Tu es:</p>

    <label for="espece">Humain</label>
    <input type="radio" name="espece" value ="human"><br>

    <label for="espece">Chat</label>
    <input type="radio" name="espece" value ="cat"><br>

    <label for="espece">Licorne</label>
    <input type="radio" name="espece" value ="unicorn"><br>

    <label for="name">Entrez votre nom :</label>
    <input type="text" name="name">

<input type="submit" name="submit" value="
Voyons voir">
</form>


</body>
</html>