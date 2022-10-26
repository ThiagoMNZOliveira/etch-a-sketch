const container = document.querySelector('.container');

function createDiv() {
    const div = document.createElement('div');
    div.classList.add('item');
    return div;
}


function hover(firstDiv) {
    const item = document.querySelectorAll('.item');
    item.forEach(item => {
        item.addEventListener('mouseover', e => {
            if (container.classList.contains('active')) {
                item.style.backgroundColor = 'black';
                firstDiv.style.backgroundColor = 'black';
                console.log(e)
            }
        });
    });

}

function makeGrid(size){
    const displaySize = 600;
    let gridSize = [];
    let divSize = displaySize / size;
    for(let i = 0; i < size; i++){
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

makeGrid(64);

container.addEventListener('mousedown', e => {
    container.classList.add('active');
    hover(e.target);
});



['mouseup', 'mouseleave'].forEach(evt => {
    container.addEventListener(evt, () => {
        container.classList.remove('active');
    });
});



