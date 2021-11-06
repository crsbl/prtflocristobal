
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



$datos = $conn->query("SELECT * FROM `items` WHERE items.nombre_items like '$obj[0]%'  " );
$items =  array($datos-> fetch_all());

echo json_encode($items);
