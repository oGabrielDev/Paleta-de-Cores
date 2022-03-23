const btnLimpar = document.getElementById('clear-board');
const btnBoard = document.getElementById('generate-board');

// Como fazer numeros aleatorios para gerar o RGB => https://www.w3schools.com/js/js_random.asp.
// template string aprendi no curso do Guanabara.
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const cor = `rgb(${r}, ${g}, ${b})`;
  return cor;
}
// Como Selecionar a propriedade https://www.w3schools.com/jsref/event_target.asp.
function selectionColor(event) {
  const colorSelection = document.getElementsByClassName('selected');
  colorSelection[0].classList.remove('selected');
  event.target.classList.add('selected');
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
    pixels.appendChild(newColor);
    newColor.addEventListener('click', selectionColor);
  }
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

function linhas(tamanho) {
  const pixel = document.getElementById('pixel-board');
  pixel.innerHTML = '';
  let box;
  const tamanhoMaximo = (tamanho + 1) * 40;
  pixel.style.maxWidth = `${tamanhoMaximo}px`;
  for (let i = 0; i < tamanho; i += 1) {
    for (let n = 0; n < tamanho; n += 1) {
      box = document.createElement('div');
      box.classList = 'pixel';
      pixel.appendChild(box);
      box.addEventListener('click', paintPixel);
    }
  }
}

function clear() {
  const pixel = document.getElementsByClassName('pixel');
  for (let n = 0; n < pixel.length; n += 1) {
    pixel[n].style.backgroundColor = 'white';
  }
}

function input() {
  if (document.getElementById('board-size').value === '') {
    alert('Board inválido!');
  }
  let tamanho = parseInt(document.getElementById('board-size').value, 10);
  if (tamanho < 5) {
    tamanho = 5;
    alert('tamanho incorreto, executando com o valor minimo 5.');
  } else if (tamanho > 50) {
    tamanho = 50;
    alert('Tamanho Maximo 50, executando com o valor maximo 50.');
  }
  linhas(tamanho);
}

criarPaleta(4);
linhas(5);

btnLimpar.addEventListener('click', clear);
btnBoard.addEventListener('click', input);
