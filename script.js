let gridContainer = document.querySelector(".gridContainer");

let gridSizeBtn = document.querySelector(".gridSizeBtn");
gridSizeBtn.addEventListener('click', () => {
    let size = -1;
    while(size < 1 || size > 100){
        size = prompt("Enter number of squares per side(max 100): ");
    }

    createGrid(size);
});
