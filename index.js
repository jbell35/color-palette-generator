

function generateColor(){
    return '#' + Math.floor(Math.random() * 1677215).toString(16).padStart(6, '0');
}

function createPalColors(){
    const palette = document.getElementById('pal');
    palette.innerHTML = '';

    for (let i = 0; i < 4; i++){
        const color = generateColor();
        const colorCard = document.createElement("div");
        colorCard.classList = "colCard";
        colorCard.style.backgroundColor = color;
        
        const hexCode = document.createElement('span');
        hexCode.textContent = color;

        colorCard.appendChild(hexCode);

        palette.appendChild(colorCard);

    }
}


const genBtn = document.querySelector(".btn");
genBtn.addEventListener('click', createPalColors);









