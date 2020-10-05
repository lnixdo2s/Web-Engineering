<?php
   session_start();
?>
<!DOCTYPE html>
<html>
<body>

<div class="login">
    <?php

    if($_SESSION["logged_in"]) {
        echo 'Hallo ' . $_SESSION["username"] . ' ' .'<a href="logout.php">ausloggen?</a>';
    } else {
        echo 'Einloggen:<br><br>
        <form action="login.php" method="post">
            Nutzername: <input type="text" name="name"><br>
            Passwort: <input type="password" name="password"><br>
            <input type="submit">
        </form><br>';
    }
    ?>
</div>
<div class="reg">
    <?php

    if(!$_SESSION["logged_in"]) {
        echo 'Registirieren:<br><br>
        <form action="register.php" method="post">
            Nutzername: <input type="text" name="name"><br>
            Passwort: <input type="password" name="password"><br>
            <input type="submit">
        </form>';
    }
    ?>

</div>
<div class="content">
    <br>
    Content: <br>
    <?php echo json_decode(file_get_contents("content.json"), true);?>
    <br> <br>
    <form action="content.php" method="post">
    <textarea name="content" cols="30" rows="10"><?php echo json_decode(file_get_contents("content.json"), true);?></textarea>
    <input type="submit" value="Ändern">
    </form> 
</div>

</body>
</html>
