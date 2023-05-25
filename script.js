let gridContainer = document.querySelector(".gridContainer");

createGrid(16);

let gridSizeBtn = document.querySelector(".gridSizeBtn");
gridSizeBtn.addEventListener('click', () => {
    let size = -1;
    while(size < 1 || size > 100){
        size = parseInt(prompt("Enter number of squares per side(max 100): "));
    }

    createGrid(size);
});

function createGrid(size){
    //Clear current grid.
    gridContainer.innerHTML = '';

    const squareSize = (gridContainer.clientWidth / size) - 2;

    //Set size and number of columns in grid so each square will fit
    //correctly since the grid does not change in size.
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    

    //Add squares.
    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            let randColor = Math.floor(Math.random() * 16777215).toString(16);
            square.style.backgroundColor = "#" + randColor;
        });

        gridContainer.appendChild(square);   
    }
}
