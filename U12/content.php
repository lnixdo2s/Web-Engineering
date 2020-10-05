<?php
    session_start();
    if($_SESSION["logged_in"]) {
        $contentfile = "content.json";

        $data = "";
        if($_SERVER["REQUEST_METHOD"] == "POST") {
            $data = test_input($_POST["content"]);
        }
        $jsondata = json_encode($data, JSON_PRETTY_PRINT);
        file_put_contents($contentfile, $jsondata);
        echo '<script type="text/javascript" language="Javascript"> 
        window.location.replace("index.php");
        </script>';
    } else {
        echo '<script type="text/javascript" language="Javascript"> 
        alert("Nicht eingeloggt!");
        window.location.replace("index.php");
        </script>';
    }
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>