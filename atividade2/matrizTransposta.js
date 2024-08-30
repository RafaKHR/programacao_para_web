function transporMatriz(A){
    A_string = "";
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            A_string += "" + A[i][j] + " ";
        }
        A_string += "\n";
    }

    console.log(A_string);

    At_string = "";
    for(let j = 0; j <A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            At_string += "" + A[i][j] + " ";
        }
        At_string += "\n";
    }

    console.log(At_string);
}

let A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(A);