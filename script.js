const container = document.querySelector('.container');
const clearButton = document.querySelector('#clear');
const sizeChange = document.querySelector('#size');

function createGrid (gridNumber) { 
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'gridSquare';
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
    let gridSquares = container.querySelectorAll('div.gridSquare');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover',changeSquareColor));
};

function changeSquareColor() {
    this.style.backgroundColor ='black';
}; 

function clearGrid() {
    let gridSquares = container.querySelectorAll('div.gridSquare');
    gridSquares.forEach(gridSquare => gridSquare.style.backgroundColor = 'white');
};

function gridSizeChange() {
    let gridSizeInput = prompt("How big the grid, master?")
    if (gridSizeInput < 40) {
        return createGrid(gridSizeInput);
        } else {
        gridSizeInput = prompt("Too many squares! Try again...");
        }
};

createGrid(16);

clearButton.addEventListener('click', clearGrid);
sizeChange.addEventListener('click', gridSizeChange);






