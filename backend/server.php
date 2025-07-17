<?php
header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=UTF-8");

require_once 'config.php';

$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($conn->connect_error) {
    echo json_encode(['error' => 'Falha na conexão: ' . $conn->connect_error]);
    die();
}

$sql = "SELECT 
            id, 
            `AZ titulo` AS titulo, 
            `AZ autor` AS autor, 
            `AZ ano` AS ano, 
            `AZ categoria` AS categoria, 
            sinopse, 
            paginas, 
            capa 
        FROM mdl_livro 
        WHERE `AZ ativo` = 'S'";

$result = $conn->query($sql);
$livros = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $livros[] = $row;
    }
}
echo json_encode($livros);
$conn->close();
?>