module.exports = function towelSort(matrix) {
    let newMatrix = [];
    if (matrix === undefined) {
        return [];
    }
    if (matrix.length === 0) return [];
    else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                matrix[i] = matrix[i].reverse();
            }
            newMatrix = newMatrix.concat(matrix[i]);
        }
        return newMatrix;
    }
};

// const matrix = [
//     [1, 2],
//     [3, 4],
// ];
// console.log(towelSort(matrix));
