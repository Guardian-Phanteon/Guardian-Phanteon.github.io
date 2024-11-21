console.log('Hello World!');
function sortTable(tableId) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.rows).slice(1); // Ignora o cabeçalho
    rows.sort((rowA, rowB) => {
        const priceA = parseFloat(rowA.cells[1].innerText.replace('R$', ''));
        const priceB = parseFloat(rowB.cells[1].innerText.replace('R$', ''));
        return priceA - priceB; // Ordena por preço (ascendente)
    });
    rows.forEach(row => table.appendChild(row)); // Reorganiza as linhas
}

function setRandomBackground() {
    const images = [
        'url("/17-BpalBQF.jpg")', 
        'url("/castelo.jpg")', 
        'url("/cenario.jpg")', 
        'url("/darkness.jpg")', 
        'url("/editPicTemp.jpg")', 
        'url("/floresta.jpg")'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = randomImage;
}

window.onload = setRandomBackground;

function rollDice(dice) {
    const result = Math.floor(Math.random() * dice) + 1;
    alert(`Você rolou um D${dice} e tirou: ${result}`);
}
