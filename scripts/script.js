let width = 16;
let height = 16;

function createBoard(){
    const containerElement = document.querySelector('.container');
/* Set the starting position of each item and append it to parent */
    for(i = 0; i < height; i++){
        for(j = 0; j < width; j++){
            const divElement = document.createElement('div');
            divElement.setAttribute('style', `grid-row: ${i + 1}; grid-column: ${j + 1}`);
            divElement.classList.add('uncolored');
            containerElement.appendChild(divElement);
        }
    }
    /* Set the number of rows and columns for the grid container */
    containerElement.style.gridTemplateRows = 'repeat(height, 1fr)';
    containerElement.style.gridTemplateColumns = 'repeat(width, 1fr)';
    
    /* Select newly created divs and add color functionality */
    const divArray = document.querySelectorAll('div.uncolored');
    divArray.forEach(currDiv => {
        currDiv.addEventListener('mouseover', (e) =>{
            e.target.classList.remove('uncolored');
            e.target.classList.add('colored');
        });
    });
}

/* Set new dimensions for board */
function setDimensions(){
    width = prompt('Please enter number of squares per side, 16');
    height = width;
}

/* Delete previously created divs on container */
function eraseBoard(){
    const containerElement = document.querySelector('.container');
    const divArray = document.querySelectorAll('div.uncolored, div.colored');
    divArray.forEach(currDiv => {
        containerElement.removeChild(currDiv);
    });
}

const newPageButton = document.querySelector('#newPage');
newPageButton.addEventListener('click', () =>{
    eraseBoard();
    setDimensions();
    createBoard();
});

createBoard();

