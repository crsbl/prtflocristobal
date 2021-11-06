
<?php  



header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

include 'conexn.php';


$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);


 
$sql = "DELETE FROM `items` WHERE `items`.`cod_items` = $obj[0]";
if (mysqli_query($conn, $sql)) {
      echo json_encode("Persona eliminada");
} else {
      echo json_encode("Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn);




?>