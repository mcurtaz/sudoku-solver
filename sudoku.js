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


console.log(puzzle);

console.log(isValid(puzzle, 6, 1, 5));

var empty = findEmpty(puzzle);

var r = empty[0];
var c = empty[1];

console.log(r, c);

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
            
            if(puzzle[i][j] == num && i != row && j != col){

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