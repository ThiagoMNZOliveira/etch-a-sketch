const container = document.querySelector('.container');

function createDiv() {
    const div = document.createElement('div');
    div.classList.add('item');
    return div;
}


function hover() {
    const item = document.querySelectorAll('.item');
    item.forEach(item => {
        item.addEventListener('mouseover', e => {
            if(container.classList.contains('active')){
                item.style.backgroundColor = 'black';
            }
        });
    });
}



for (let i = 0; i < 16 * 16; i++) {
    const div = createDiv();
    container.appendChild(div);
}

container.addEventListener('mousedown', e => {
    container.classList.add('active');
    hover();
});

container.addEventListener('mouseup', e => {
    container.classList.remove('active');
})


