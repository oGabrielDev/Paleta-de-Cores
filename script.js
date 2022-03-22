const pixel = document.getElementById('pixel-board');

function linhas(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const pixelOne = document.createElement('div');
    pixelOne.id = 'pixel-board';
    for (let n = 0; n < tamanho; n += 1) {
      const box = document.createElement('div');
      box.classList = 'pixel';
      pixelOne.appendChild(box);
    }
    pixel.appendChild(pixelOne);
  }
}
linhas(5);
