<?php 
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
            'password'=> password_hash($p, PASSWORD_DEFAULT)
            );
    
        $jsondata = file_get_contents($userfile);
        $arr_data = json_decode($jsondata, true);
        if($arr_data == null) {
            $arr_data = array();
        }
        foreach($arr_data as $value) {
            if(strcmp($value['name'], $nuser['name']) == 0) {
                echo '<script type="text/javascript" language="Javascript"> 
                alert("Nutzername schon vergeben!");
                window.location.replace("index.php");
                </script>';
                die();
            }
        }

        array_push($arr_data, $nuser);
        $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
        if(file_put_contents($userfile, $jsondata)) {
            echo '<script type="text/javascript" language="Javascript"> 
            alert("Erfolgreich registriert!");
            window.location.replace("index.php");
            </script>';
        }
        else {
            echo '<script type="text/javascript" language="Javascript"> 
            alert("Fehler!");
            window.location.replace("index.php");
            </script>';
        }
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

