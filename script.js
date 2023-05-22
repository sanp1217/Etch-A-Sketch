let gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);    
}