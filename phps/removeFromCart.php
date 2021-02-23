<?php

    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;

    $connect = new PDO("mysql:host=localhost;dbname=dragonsden", "root", "");

    $query = "DELETE FROM cart WHERE productID = ?";
    $statement = $connect->prepare($query);
    $statement -> bindValue(1, $id);
    $statement->execute();

    //close connection
    $connect = null;

?>