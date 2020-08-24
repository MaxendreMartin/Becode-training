<?php
$famille = ["Delphine","Fred","Mathis","Martin","Jade","Daniel","Martine"];
array_push ($famille, "Annie");
print_r($famille);
$recette = ["Carbonarra","rôti","boulettes sauce tomate"];
//var_dump($recette);
print_r($recette);
$film = ["Django","La ligne verte","1917"];
echo $film[0];

$me = [
    "prenom" => "Maxendre",
    "nom de famille" => "Martin",
    "age" => 20,
    "saison pref" => "hiver",
    "football" => true,
    "hobbies" => ["musique","film"],
];

$mother = [
    "prenom" => "Delphine",
    "nom de famille" => "Salmon",
    "age" => 43,
    "saison pref" => "hiver",
    "football" => false,
    "hobbies" => ["lire","restaurant"],
];

  echo '<pre>';
  print_r($me);
  echo '</pre>';

  echo "<pre>";
  print_r($mother);
  echo"</pre>";

  echo "<pre>";
  print_r(count($mother));
  echo"</pre>";

  echo "<pre>";
  print_r(count($me["hobbies"]));
  echo"</pre>";

  echo "<pre>";
  $result = count($me['hobbies']) + count($mother['hobbies']);
  echo $result;
  echo"</pre>";

  $me['hobbies'][] = "Taxidermy";
  echo "<pre>";
  print_r($me);
  echo "</pre>";
  
  $me["nom de famille"] = "Durand";
  echo $me ["nom de famille"];

  $soulmate = [
      "prenom" => "mac",
      "nom de famille" => "apple",
      "age" => 44,
      "saison pref" => "hiver",
      "football" => false,
      "hobbies" => ["lire","coder","musique"],
  ];

  $possible_hobbies_via_intersection = array_intersect($me["hobbies"], $soulmate["hobbies"]);
  $possible_hobbies_via_merge = array_merge($me["hobbies"], $soulmate["hobbies"]);

  echo "<pre>";
  print_r($possible_hobbies_via_intersection);
  print_r($possible_hobbies_via_merge);
  echo "</pre>";


  $web_development = [
      "frontend" => [],
      "backend" => []
  ];
  $web_development['frontend'][] = 'xhtml';
  $web_development['backend'][] = 'Ruby on Rails';
  $web_development['frontend'][] = 'css';
  $web_development['backend'][] = 'flash';
  $web_development['backend'][] = 'javascript';
  $web_development['frontend'][0] = 'html';
  unset($web_development['backend'][1]);

  echo '<pre>';
  print_r($web_development);
  echo '</pre>';

?>

