const container = document.getElementById('grid');

for (let i = 1; i <= 256; i++) {
  const cell = document.createElement('div');
  cell.innerText = i;
  container.appendChild(cell);
}