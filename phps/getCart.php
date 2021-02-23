<?php
    $connect = new PDO("mysql:host=localhost;dbname=dragonsden", "root", "");

    $query = "SELECT p.id, p.img, p.name, p.description, p.color, p.size, cat.name as 'category', p.price, c.quantity FROM `cart` as c 
    JOIN products as p on c.productID = p.id 
    JOIN categories as cat on p.category = cat.id";

    $statement = $connect->prepare($query);
    $statement->execute();

    while($row = $statement->fetch(PDO::FETCH_ASSOC))
    {
        $data[] = $row;
    }
    
    if(!empty($data))
        echo json_encode($data);

    //close connection
    $connect = null;
?>