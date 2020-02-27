let width = 16;
let height = 16;

function createBoard(){
    const containerElement = document.querySelector('.container');
/* Set the starting position of each item and append it to parent */
    for(i = 0; i < width; i++){
        for(j = 0; j < height; j++){
            const divElement = document.createElement('div');
            divElement.style.gridColumn = i + 1;
            divElement.style.gridRow = j + 1;
            divElement.style.height = '100%';
            divElement.style.width = '100%';
            divElement.classList.add('uncolored');
            containerElement.appendChild(divElement);
        }
    }
    /* Set the number of rows and columns for the grid */
    containerElement.style.gridTemplateRows = 'repeat(height, 1fr)';
    containerElement.style.gridTemplateColumns = 'repeat(width, 1fr)';
    
    const divArray = document.querySelectorAll('div.uncolored');
    divArray.forEach(currDiv => {
        currDiv.addEventListener('mouseover', (e) =>{
            e.target.classList.remove('uncolored');
            e.target.classList.add('colored');
        });
    });
}

function newDimensions(){

}

function eraseBoard(){

}

const newPageButton = document.querySelector('#newPage');
newPageButton.addEventListener('click', () =>{
    eraseBoard();
    createBoard();
});

