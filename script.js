let gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);    
}

const squares = document.querySelectorAll(".gridContainer .square");

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        let randColor = Math.floor(Math.random() * 16777215).toString(16);
        square.style.backgroundColor = "#" + randColor;
    })
})

let gridSizeBtn = document.querySelector(".gridSizeBtn");
gridSizeBtn.addEventListener('click', () => {
    let size = prompt("Enter number of squares per side: ");
    changeGridSize(size);
});
