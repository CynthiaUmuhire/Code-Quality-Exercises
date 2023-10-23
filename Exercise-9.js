const calculateMatrixSum = (matrix) =>{
    let sum = 0;
   matrix.flat().forEach((number) => {
       sum += number;
   })
    return sum;
}
