const container = document.querySelector('.container');
const gridSize = document.querySelector('#gridSize');
const sizeLabel = document.querySelector('label');



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
                item.classList.add('painted');
            }
        });
    });

}

function makeGrid(size) {
    const displaySize = 700;
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






