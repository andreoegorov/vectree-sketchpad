const display = document.getElementById("display");
const defaultDisplaySize = 16;
const displaySize = {
    height: 400,
    width: 400
}

function createGrid(size=defaultDisplaySize) {
    let div = document.createElement("div");
        div.style.width = '97.5px';
        div.style.height = '97.5px';
        div.style.float = 'left';
        div.style.backgroundColor = 'red';
    for (let i = 0; i < size; i++) {
        display.appendChild(div.cloneNode());
    }
}

function resetGrid() {
    
}
createGrid();

