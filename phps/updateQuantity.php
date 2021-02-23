<?php

    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;
    $quantity = $data->quantity;

    $connect = new PDO("mysql:host=localhost;dbname=dragonsden", "root", "");

    $query = "UPDATE cart SET quantity = ? WHERE productID = ?";
    $statement = $connect->prepare($query);
    $statement -> bindValue(1, $quantity);
    $statement -> bindValue(2, $id);
    $statement->execute();

    //close connection
    $connect = null;

?>