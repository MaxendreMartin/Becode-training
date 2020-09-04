<!--POO: Helpers Class : Etape 1-->

<?php
    require 'form.php';
    require 'html.php';


    $form = new Form($_POST);
    $html = new html();
    
?>
   <form action="#" method="post">
    <?php

         echo $form->input('username');
         echo $form->submit();
         echo $form->checkbox('result');
         echo $form->textarea();
         echo $form->radio();
         echo $form->select();


         echo $html->generateCss();
         echo $html->generateMeta();
         echo $html->generateImg();
         echo $html->generateLink();
     
    ?>
   </form>

   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title></title>
   </head>
   <body>
   <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
   </body>
   </html>