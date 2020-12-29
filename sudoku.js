let puzzle = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9],
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,5,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
];


printPuzzle(puzzle);

addButtonListener();





function printPuzzle(puzzle){

    var target = document.getElementById('board');

    target.innerHTML = '';

    for (var i = 0; i < puzzle.length; i++) {
        
        for (var j = 0; j < puzzle[i].length; j++) {
            
            var num = '';

            if(puzzle[i][j] != 0){
                num = puzzle[i][j];
            }

            var newLi = document.createElement("li");
 
            //Set its unique ID.
            newLi.className = 'row-' + i + ' col-' + j;
            
            //Add your content to the DIV
            newLi.innerHTML = num;
            
            target.appendChild(newLi);
            
        }
        
    }
}

function addButtonListener(){

    document.getElementById('solve-btn').addEventListener('click', function(){

        solvePuzzle(puzzle);

        printPuzzle(puzzle)
    });

}


function solvePuzzle(puzzle){

    var empty = findEmpty(puzzle);

    if(!empty){
        return true;
    } else {

        var row = empty[0];
        var col = empty[1];

        for (let i = 1; i < 10; i++) {
           
            if(isValid(puzzle, i, row, col)){

                puzzle[row][col] = i;

                if(solvePuzzle(puzzle)){

                    return true;

                } else{

                    puzzle[row][col] = 0;

                }

            }
        }

    }
}


function isValid(puzzle, num, row, col){

    // ciclo su row
    for (var i = 0; i < puzzle[row].length; i++) {
        
        if(puzzle[row][i] == num && i != col){
            return false;
        }
        
    }

    // ciclo sulle col
    for (var j = 0; j < puzzle.length; j++) {

        if(puzzle[j][col] == num && j != row){
            return false;
        }
        
    }

    // ciclo sul quadratino
    var rowFrom = Math.floor(row / 3) * 3;
    var rowTo = rowFrom + 3;
    var colFrom = Math.floor(col / 3) * 3;
    var colTo = colFrom + 3;

    for (var i = rowFrom; i < rowTo; i++) {
       
        for (var j = colFrom; j < colTo; j++) {
            
            if(puzzle[i][j] == num && !(i == row && j == col)){

                return false
            }
        }
        
    }


    return true;
}


function findEmpty(puzzle){

    for (var i = 0; i < puzzle.length; i++) {
        
        for (var j = 0; j < puzzle[i].length; j++) {
            
            if(puzzle[i][j] == 0){

                return [i,j];
            }
            
        }
        
    }

    return false;
}