<?php
include 'connect.php';

// Função para buscar dados de uma tabela
function fetchTableData($tableName) {
    global $conn;
    $sql = "SELECT * FROM $tableName";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row['item'] . "</td><td>" . $row['preco'] . "</td></tr>";
        }
    } else {
        echo "<tr><td colspan='2'>Nenhum dado encontrado</td></tr>";
    }
}

// Exibindo dados para Itens Ofensivos
echo "<h2>Itens Ofensivos</h2>";
echo "<table id='itemTable'><thead><tr><th>Item</th><th>Preço (R$)</th></tr></thead><tbody>";
fetchTableData('itens_ofensivos');
echo "</tbody></table>";

// Exibindo dados para Pets
echo "<h2>Pets</h2>";
echo "<table id='petTable'><thead><tr><th>Pet</th><th>Preço (R$)</th></tr></thead><tbody>";
fetchTableData('pets');
echo "</tbody></table>";

// Exibindo dados para VIPs
echo "<h2>Vips</h2>";
echo "<table id='vipTable'><thead><tr><th>Bonus</th><th>Preço (R$)</th></tr></thead><tbody>";
fetchTableData('vips');
echo "</tbody></table>";

// Exibindo dados para Pontos
echo "<h2>Pontos</h2>";
echo "<table id='pontosTable'><thead><tr><th>Pontos</th><th>Preço (R$)</th></tr></thead><tbody>";
fetchTableData('pontos');
echo "</tbody></table>";

$conn->close();
?>