<?php
// 3. "Different greetings according to age" Exercise

if (isset($_GET['age'])){
	// Form processing

    if($_GET["age"] < 12){
        if($_GET ["gender"] === "girl" && $_GET["english"] === "no"){
        echo "Aloha girl ! <br>";
    }else if ($_GET ["gender"] === "girl" && $_GET["english"] === "yes"){
        echo "Hello girl ! <br>";
    }else if ($_GET ["gender"] === "male" && $_GET["english"] === "yes"){
        echo "Hello boy ! <br>";
    }else {
        echo "Aloha boy ! <br>";
    }

    }else if ($_GET["age"]>12 && $_GET['age'] < 18){
        if($_GET ["gender"] === "girl" && $_GET["english"] === "no"){
            echo "Aloha miss teenager ! <br>";
        }else if ($_GET ["gender"] === "girl" && $_GET["english"] === "yes"){
            echo "Hello miss teenager ! <br>";
        }else if ($_GET ["gender"] === "male" && $_GET["english"] === "yes"){
            echo "Hello mister teenager ! <br>";
        }else {
            echo "Aloha mister teenager ! <br>";
        }

    }else if ($_GET["age"]>18 && $_GET['age'] < 115){
        if($_GET ["gender"] === "girl" && $_GET["english"] === "no"){
            echo "Aloha miss adult ! <br>";
        }else if ($_GET ["gender"] === "girl" && $_GET["english"] === "yes"){
            echo "Hello miss adult ! <br>";
        }else if ($_GET ["gender"] === "male" && $_GET["english"] === "yes"){
            echo "Hello mister adult ! <br>";
        }else {
            echo "Aloha mister adult ! <br>";
        }
    }else {
        echo "Wow! Still alive ? Are you a robot, like me ? Can I hug you ?";
    };

}
// Form (incomplete)
?>
<form method="GET" action="">
	<label for="age">Enter your age.</label>
    <label for="gender">Are you a girl or a man?</label>
            <label for="male"> Male<input type="radio" name="gender" value='male'></label>
            <label for="girl"> Girl<input type="radio" name="gender" value='girl'></label><br>
    <label for="english"> Do you speak English?</label>
            <label for="yes">Yes <input type="radio" name="english" value='yes'></label>
            <label for="no">No <input type="radio" name="english" value='no'></label><br>
	<input type="number" name="age">
	<input type="submit" name="submit" value="Greet me now">
</form>
