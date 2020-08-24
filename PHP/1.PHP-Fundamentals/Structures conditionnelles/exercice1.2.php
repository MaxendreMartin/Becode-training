<?php
// 1.2 Nettoyez votre salle Exercice, amélioré

// Crée le tableau des états 
 $possible_states = [
  0 => "dirty",
  1 => "clean",
  2 => "immaculate"
];

// Lors du test, changez la valeur d'index pour accéder aux valeurs possibles du tableau 
$room_filthiness = $possible_states [2];

if ($room_filthiness === "dirty" ) { echo  "Yuk, la chambre est dégoûtante! Nettoyons-la
	 !" ;
} else  if ($room_filthiness === "clean" ) { echo  "Yuk, la pièce est sale: nettoyons-la
	 !" ;
// ... 
} else {
	 echo  "<br> Rien à faire, la chambre est soignée." ;
};

?>