<?php
// 2. "Different greetings according to time" Exercise
date_default_timezone_set("UTC");
$now =  date ("h:i");

if($now >="05:00" && $now <= "09:00"){
  echo "Good morning! <br>";
}else if ($now >= "09:01" && $now <= "12:00" ){
  echo "Good day! <br>";
}else if ($now >= "12:01" && $now <= "16:00" ){
  echo "Good afternoon ! <br>";
}
else if ($now >= "16:01" && $now <= "21:00" ){
  echo "Good evening! <br>";
}
else {
  echo "Good night! <br>";
};

?>
