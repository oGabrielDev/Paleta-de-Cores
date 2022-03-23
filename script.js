const btnLimpar = document.getElementById('clear-board');
const btnBoard = document.getElementById('generate-board');

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const cor = `rgb(${r}, ${g}, ${b})`;
  return cor;
}

function criarPaleta(colors) {
  const pixels = document.getElementById('color-palette');
  let newColor;
  for (let i = 1; i <= colors; i += 1) {
    newColor = document.createElement('div');
    if (i === 1) {
      newColor.classList = 'color selected';
      newColor.style.backgroundColor = 'black';
    } else {
      newColor.classList = 'color';
      newColor.style.backgroundColor = randomColor();
    }
    newColor.addEventListener('click', selectionColor);
    pixels.appendChild(newColor);
  }
}

function linhas(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const pixel = document.getElementById('pixel-board');
    const pixelOne = document.createElement('div');
    pixel.appendChild(pixelOne);
    for (let n = 0; n < tamanho; n += 1) {
      const box = document.createElement('div');
      box.classList = 'pixel';
      pixelOne.appendChild(box);
      box.addEventListener('click', paintPixel);
    }
  }
}
linhas(5);

function selectionColor(event) {
  const colorSelection = document.getElementsByClassName('selected');
  colorSelection[0].classList.remove('selected');
  event.target.classList.add('selected');
}

function paintPixel(event) {
  const colorSelected = document.getElementsByClassName('selected');
  const evento = event.target;
  if (
    event.target.style.backgroundColor
    !== colorSelected[0].style.backgroundColor
  ) {
    evento.style.backgroundColor = colorSelected[0].style.backgroundColor;
  } else {
    evento.target.backgroundColor = 'white';
  }
}

criarPaleta(4);

// btnLimpar.addEventListener('click', limpaPixels);

// btnBoard.addEventListener('click', validaInput);
