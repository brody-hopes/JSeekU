<?php
/**
 * Created by PhpStorm.
 * User: hopes
 * Date: 9/09/2018
 * Time: 12:03 PM
 */

// Login details and database selection
$servername = "localhost";
$username = "root";
$password = "Password123456789";
$dbname = "new_schema";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}

catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;