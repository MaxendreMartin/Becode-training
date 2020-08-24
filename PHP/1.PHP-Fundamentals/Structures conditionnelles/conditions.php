<?php 
// 1.1 Nettoyez votre chambre Exercice 

$room_is_filthy = true ;

if ($room_is_filthy = true) { echo  "Yuk, la pièce est sale: nettoyons-la
	 !" ;
	cleanup_room ();
	echo  "<br> La chambre est maintenant propre!" ;
	$room_is_filthy = false ;
} else {
	 echo  "<br> Rien à faire, la chambre est soignée." ;
}

?>