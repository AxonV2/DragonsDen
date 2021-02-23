<?php

    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;

    $connect = new PDO("mysql:host=localhost;dbname=dragonsden", "root", "");

    $query = "SELECT productID FROM cart where productID = ?";

    $statement = $connect->prepare($query);
    $statement -> bindValue(1, $id);
    $statement->execute();

    $res = $statement->fetch(PDO::FETCH_ASSOC);
    
    //If already there update quantity only
    if (!empty($res)) 
    {
        //Get quantity
        $query = "SELECT quantity FROM cart WHERE productID = ?";
        $statement = $connect->prepare($query);
        $statement -> bindValue(1, $id);
        $statement->execute();
        $value = $statement->fetch(PDO::FETCH_ASSOC);
        $quantity = $value['quantity'] + 1;

        //Set quantity
        $query = "UPDATE cart SET quantity = ? WHERE productID = ?";
        $statement = $connect->prepare($query);
        $statement -> bindValue(1, $quantity);
        $statement -> bindValue(2, $id);
        $statement->execute();
    }
    else
    {
        $query = "INSERT INTO cart (productID, quantity) VALUES(?, ?)";
        $statement = $connect->prepare($query);
        $statement->bindValue(1, $id);
        $statement->bindValue(2, 1);
        $statement->execute();
    } 

    //close connection
    $connect = null;

?>