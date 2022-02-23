const container = document.querySelector('.container');

function createGrid (gridNumber) { 
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'gridSquare';
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
}

function squareColorChange () {


}




createGrid(16);







