const display = document.getElementById("display");
const defaultDisplaySection = 16;
const displaySize = display.clientWidth;

function parseRGB(input) {
    m = input.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if( m) {
        return [m[1],m[2],m[3]];
    }
}

function changeBackground(event) {
    const backgroundColorRGB = parseRGB(event.currentTarget.style.backgroundColor);
    const maxValueOfRGB = Math.max(...backgroundColorRGB);
    const r = Math.floor(Math.random() * maxValueOfRGB );
    const g = Math.floor(Math.random() * maxValueOfRGB );
    const b = Math.floor(Math.random() * maxValueOfRGB ); 
    console.log(maxValueOfRGB);  
    event.currentTarget.style.backgroundColor = `rgb( ${ r }, ${ g }, ${ b })`;
}

function createGrid(size=defaultDisplaySection) {
    const divElement = document.createElement("div");
        divElement.style.width = `${displaySize / Math.sqrt(size)}px`;
        divElement.style.height = `${displaySize / Math.sqrt(size)}px`;
        divElement.style.float = 'left';
        divElement.style.backgroundColor = 'rgb( 255, 255, 255)';
    for (let i = 0; i < size; i++) {
        const divNode = divElement.cloneNode();
        divNode.addEventListener("mouseover", changeBackground);
        display.appendChild(divNode);
    }
}

function resetGrid() {
    let displaySection = prompt("Какое количество квадратов задать для новой сетки?", defaultDisplaySection);
    while (display.firstChild) {
        display.removeChild(display.lastChild);
      }
    if (displaySection == null || displaySection == 0) displaySection = defaultDisplaySection;
    createGrid(displaySection);   
}

createGrid();

