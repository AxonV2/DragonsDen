<?php
    $connect = new PDO("mysql:host=localhost;dbname=dragonsden", "root", "");

    $query = "SELECT * FROM products";
    $statement = $connect->prepare($query);
    $statement->execute();

    while($row = $statement->fetch(PDO::FETCH_ASSOC))
    {
        $data[] = $row;
    }

    echo json_encode($data);

    //close connection
    $connect = null;
?>