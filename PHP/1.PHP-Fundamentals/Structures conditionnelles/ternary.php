<?php
$hello = ($gender = "M") ?  "Hello Boy !" : "Hello Girl ! ";
$gender = "F";
$isegender = ($gender = "F") ? $hello : $hello;
echo $isegender
?>

