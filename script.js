const display = document.getElementById("display");
const defaultDisplaySection = 16;
const deltaColorValue = 150;
const percentDeltaBlackout = 10;
const displaySize = display.clientWidth;

function parseStringRGB(input) {
    m = input.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if( m) {
        return [m[1],m[2],m[3]];
    }
}

function changeBackground(event) {
    const backgroundColorString = event.currentTarget.style.backgroundColor;
    
    if(backgroundColorString == "rgb(255, 255, 255)") {
        const r = Math.floor(255 - Math.random() * deltaColorValue);
        const g = Math.floor(255 - Math.random() * deltaColorValue);
        const b = Math.floor(255 - Math.random() * deltaColorValue); 
        event.currentTarget.style.backgroundColor = `rgb( ${ r }, ${ g }, ${ b })`;
    }else{
        const backgroundColorRGB = parseStringRGB(backgroundColorString);
        const r = Math.floor(backgroundColorRGB[0] - 255 / percentDeltaBlackout);
        const g = Math.floor(backgroundColorRGB[1] - 255 / percentDeltaBlackout);
        const b = Math.floor(backgroundColorRGB[2] - 255 / percentDeltaBlackout); 
        event.currentTarget.style.backgroundColor = `rgb( ${ r }, ${ g }, ${ b })`;
    }
}

function createGrid(size=defaultDisplaySection) {
    const divElement = document.createElement("div");
        divElement.style.width = `${ displaySize / size }px`;
        divElement.style.height = `${ displaySize / size }px`;
        divElement.style.float = 'left';
        divElement.style.backgroundColor = 'rgb( 255, 255, 255)';

    for (let i = 0; i < Math.pow(size,2); i++) {
        const divNode = divElement.cloneNode();
        divNode.addEventListener("mouseover", changeBackground);
        display.appendChild(divNode);
    }
}

function resetGrid() {
    let displaySection = prompt("Какое количество квадратов сторон задать для новой сетки?", defaultDisplaySection);
    
    while (display.firstChild) {
        display.removeChild(display.lastChild);
    }
    if (displaySection == null || displaySection == 0) displaySection = defaultDisplaySection;
    createGrid(displaySection);   
}

createGrid();

