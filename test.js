function rainbowColors() {
    const letter = ['a', 'b', 'c', 'd', 'e', 'f'];
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let color = ['#'];

    for(let i = 0; i < 3; i++){
        color.push(letter[Math.floor(Math.random() * (6 - 0))]);
        color.push(number[Math.floor(Math.random(9 - 0))]);
    }
    
    return color.join('');
}


rainbowColors();