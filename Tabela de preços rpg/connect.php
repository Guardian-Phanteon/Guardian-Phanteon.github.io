<?php
$servername = "localhost";
$username = "root"; // altere se necessário
$password = "root"; // altere se necessário
$dbname = "Tabela De Items";

// Criar a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>