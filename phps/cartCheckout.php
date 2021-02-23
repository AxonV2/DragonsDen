<?php
    $connect = new PDO("mysql:host=localhost;dbname=dragonsden", "root", "");

    $query = "DELETE FROM cart";
    $statement = $connect->prepare($query);
    $statement->execute();

    //close connection
    $connect = null;
?>