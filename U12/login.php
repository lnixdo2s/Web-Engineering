<?php 
    session_start();
    $userfile = "users.json"; 
    $arr_data = array();
 
    try
    {

        $n = $p = "";
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $n = test_input($_POST["name"]);
            $p = test_input($_POST["password"]);
        }
        $nuser = array(
            'name'=> $n,
            'password'=> $p
            );
    
        $jsondata = file_get_contents($userfile);
        $arr_data = json_decode($jsondata, true);
        if($arr_data == null) {
            $arr_data = array();
        }
        foreach($arr_data as $value) {
            if(strcmp($value['name'], $nuser['name']) == 0) {
                if(password_verify($nuser['password'], $value['password'])) {
                    $_SESSION["logged_in"] = true;
                    $_SESSION["username"] = $nuser["name"];
                    echo '<script type="text/javascript" language="Javascript"> 
                    alert("Erfolgreich eingeloggt!");
                    window.location.replace("index.php");
                    </script>';
                } else {
                    echo '<script type="text/javascript" language="Javascript"> 
                    alert("Passwort ist nicht korrekt!");
                    window.location.replace("index.php");
                    </script>'; 
                }
                die();
            }
        }
        echo '<script type="text/javascript" language="Javascript"> 
            alert("Nutzer nicht registriert!");
            window.location.replace("index.php");
            </script>';
    }
    catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>