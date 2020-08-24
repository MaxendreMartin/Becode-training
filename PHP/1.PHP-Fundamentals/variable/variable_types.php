<?php 
$prenom = "Maxendre";
$age = 20;
$couleur = "brun";
$team = array (
    0 => "Delphine",
    1 => "Fred",
    2 => "Mathis",
    3 => "Martin"
);
$faim = true;
?>

<p>Salut! Je m'appelle <?php echo $prenom; ?>. J'ai <?php echo $age; ?>
ans. Mes yeux sont <?php echo $couleur; ?>.</p> 
<p>La première personne de ma famille est <?php echo $team[0]; ?> J'ai faim?<?php echo $faim; ?>  </p>
