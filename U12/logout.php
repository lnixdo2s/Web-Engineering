<?php
    session_start();
    session_unset();
    session_destroy();
    echo '<script type="text/javascript" language="Javascript"> 
    window.location.replace("index.php");
    </script>';
?>