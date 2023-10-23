const calculateFactorial = (number) => {
    let factorial = 1;
    if (number === 0 || number === 1) return factorial;

    for ( let i = 2 ; i <= number; i++ ){
        factorial *= i;
    }
    return factorial;
}

