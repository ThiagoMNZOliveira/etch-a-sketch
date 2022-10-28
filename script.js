const container = document.querySelector('.container');
const gridSize = document.querySelector('#gridSize');
const sizeLabel = document.querySelector('label');
const colorButton = document.querySelector('#colorButton');
const clearButton = document.querySelector('#clear');
const rainbowButton = document.querySelector('#rainbowButton');
let color = '#000000';
let rainbow = false;


makeGrid(gridSize.value);
gridSize.addEventListener('input', e => {
    const item = document.querySelectorAll('.item');
    item.forEach(item => {
        item.classList.remove('painted');
    });
    sizeLabel.innerText = `Grid Size: ${gridSize.value} x ${gridSize.value}`;
    makeGrid(gridSize.value);
});


listen();

function listen() {

    rainbowButton.addEventListener('click', e => {
        rainbow = true;
    })

    clearButton.addEventListener('click', e => {
        clear();
    })

    colorButton.addEventListener('input', e => {
        rainbow = false;
        color = colorButton.value;
    });

    window.onmousedown = e => {
        container.classList.add('active');
        hover();
    }

    window.onmouseup = e => { container.classList.remove('active') };

}

function createDiv() {
    const div = document.createElement('div');
    div.classList.add('item');
    return div;
}

function hover() {
    const item = document.querySelectorAll('.item');
    item.forEach(item => {
        item.addEventListener('mouseover', e => {
            if (container.classList.contains('active')) {
                if (rainbow == true) {
                    color = rainbowColors();
                }
                item.style.backgroundColor = color;
            }
        });
    });


}

function makeGrid(size) {
    container.innerHTML = '';
    const displaySize = 600;
    let gridSize = [];
    let divSize = displaySize / size;
    for (let i = 0; i < size; i++) {
        gridSize.push(divSize);
    }
    const gridStr = gridSize.toString().split(',').join('px ') + 'px';

    container.style.gridTemplateColumns = gridStr;
    container.style.gridTemplateRows = gridStr;

    for (let i = 0; i < size * size; i++) {
        const div = createDiv();
        container.appendChild(div);
    }

}

function clear() {
    const item = document.querySelectorAll('.item');
    item.forEach(item => {
        item.style.backgroundColor = '#a09f9f';
    });
}

function rainbowColors() {
    const letter = ['a', 'b', 'c', 'd', 'e', 'f'];
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let color = ['#'];

    for (let i = 0; i < 3; i++) {
        color.push(letter[Math.floor(Math.random() * (6 - 0))]);
        color.push(number[Math.floor(Math.random(9 - 0))]);
    }

    return color.join('');
}





