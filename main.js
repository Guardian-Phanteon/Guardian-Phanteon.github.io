console.log('Hello World!');
function sortTable(tableId) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => parseFloat(a.cells[1].innerText) - parseFloat(b.cells[1].innerText));
    rows.forEach(row => table.tBodies[0].appendChild(row));
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
