function addMatrices() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);

    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
        alert('Invalid input. Please enter valid dimensions.');
        return;
    }

    const matrix1 = [];
    const matrix2 = [];

    for (let i = 0; i < rows; i++) {
        matrix1[i] = [];
        matrix2[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix1[i][j] = parseInt(prompt(Enter element for matrix 1 at position (${i + 1}, ${j + 1}):));
            matrix2[i][j] = parseInt(prompt(Enter element for matrix 2 at position (${i + 1}, ${j + 1}):));
        }
    }

    const result = addMatricesHelper(matrix1, matrix2, rows, cols);
    const resultString = matrixToString(result);
    document.getElementById('result').textContent = resultString;
}

function addMatricesHelper(matrix1, matrix2, rows, cols) {
    const result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

function matrixToString(matrix) {
    let resultString = '';
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            resultString += matrix[i][j];
            if (j < cols - 1) {
                resultString += '\t'; 
            }
        }
        if (i < rows - 1) {
            resultString += '\n'; 
        }
    }

    return resultString;
}