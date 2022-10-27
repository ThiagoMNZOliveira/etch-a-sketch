const container = document.querySelector('.container');
const gridSize = document.querySelector('#gridSize');
const sizeLabel = document.querySelector('label');
const colorButton = document.querySelector('#colorButton');
const clearButton = document.querySelector('#clear');
let color = '#000000'


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

    clearButton.addEventListener('click', e => {
        clear();
    })

    colorButton.addEventListener('input', e => {
        color = colorButton.value;
    })


    container.addEventListener('mousedown', e => {
        container.classList.add('active');
        hover();
    });

    ['mouseup', 'mouseleave'].forEach(evt => {
        container.addEventListener(evt, () => {
            container.classList.remove('active');
        });
    });
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






