<!--POO-Helpers-Class-etape-2-->
<?php


/**
 * Class Html
 * Permet de générer différents éléments HTML
 */
class Html{


    private $data;


    public function __construct($data = array()){
        $this->data = $data;
    }


    /**
     * return css
     */
    public function generateCss(){
        return "<link rel='stylesheet' href='assets/css/style.css'>";
    }


    /**
     * return meta
     */
    public function generateMeta(){
        return "<meta name ='viewport' content 'width=device-width,initial-scale=1.0'>";
    }


    /**
     * return image
     */
    public function generateImg(){
        return "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png' alt='logo vscode' height='100px' width='100px'><br>";
    }


    /**
     * return liens
     */
    public function generateLink(){
        return "<a href='http://github.com/MaxendreMartin' target='_blank'>Link</a>";
    }


    /**
     * return js
     */
    public function generateLink(){
        return "<script src='assets/script.js'></script>";
    }
}
?>
