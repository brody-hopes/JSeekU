<?php
/**
 * Created by PhpStorm.
 * User: hopes
 * Date: 9/09/2018
 * Time: 2:05 PM
 */

/**
 * Start the session.
 */
session_start();


/**
 * Check if the user is logged in.
 */
if(!isset($_SESSION['user_id']) || !isset($_SESSION['logged_in'])){
    //User not logged in. Redirect them back to the login.php page.
    header('Location: Login.php');
    exit;
}


/**
 * Print out something that only logged in users can see.
 */

echo 'Congratulations! You are logged in!';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>YOU ARE LOGGED IN</h1>

</body>
</html>


