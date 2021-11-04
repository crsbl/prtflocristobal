<?php 


    $conn = mysqli_connect("localhost", "root", "","prf3");
    if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
    }
?>