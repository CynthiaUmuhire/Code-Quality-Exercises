function fibonacci(number) {
    let fibSequence = [0, 1];
    for (let index = 2; index <= number; index++) {
        fibSequence[index] = fibSequence[index - 1] + fibSequence[index - 2];
    }
    return fibSequence.join(",");
}
console.log(fibonacci(10));