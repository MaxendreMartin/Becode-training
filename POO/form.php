<!--POO: Helpers Class : Etape 1-->
<?php


/**
 * Class Form
 * Permet de générer un formulaire
 */
class Form{


    /** 
     * Données utilisées par le formulaire
    */
    private $data;


    /**
     * var string Tag utilisé pour entourer les champs
    */
    public $surround = 'p';


    /**
     * param array $data Données utilisées par le formulaire
     */
    public function __construct($data = array()){
        $this->data = $data;
    }


    /**
     * param html code HTML à entourer
     * return string
     */
    private function surround($html){
        return "<{$this->surround}>$html</{$this->surround}>";
    }


    /**
     * param $name string
     * return string
     */
    public function input($name){
        return $this->surround('<input type="text" name="' . $name . '">');
    }
    

    /**
     * return string
     */
    public function submit(){
        return $this->surround('<button type="submit">Envoyer</button>');
    }


    /**
     * param $result checkbox
     */
    public function checkbox($result){
        if(!empty($_POST))
        {
        echo '<pre>';
        echo print_r($_POST['choix'],true);
        echo '</pre><br />
        Faire un autre test : <a href="checkbox.php">Tester à nouveau</a>';
        }
        else
        {
        echo '<b>Checkbox multiple</b>';
        
        echo '<form method="POST" action="checkbox.php"><br>
            <input type="checkbox" name="choix[]" value="1"> nom 1<br>
            <input type="checkbox" name="choix[]" value="2"> nom 2<br>
            <input type="checkbox" name="choix[]" value="3"> nom 3<br>
            <input type="checkbox" name="choix[]" value="4"> nom 4<br>
            <input type="checkbox" name="choix[]" value="5"> nom 5<br>
            </form>';
        }
    }


    /**
     * return string
     */
    public function textarea(){
        return $this->surround('<textarea type="text" row="5"></textarea>');
    }


    /**
     * button radio (A revoir petit soucis on sait en selectionner plusieurs)
     */
    public function radio(){
        echo '<form method="POST" action="radio"><br>
        <label><input type="radio"">M</label>
        <label><input type="radio"">F</label>
        </form>';
    }


    /**
     * liste deroulante select
     */
    public function select(){
        echo '<form method="POST" action="select"><br>
        <select name="couleur">
        <option value="orange">Orange</option>
        <option value="bleu" selected>Bleu</option>
        <option value="rouge">Rouge</option>
        </select>
        </form>';
    }


    

}