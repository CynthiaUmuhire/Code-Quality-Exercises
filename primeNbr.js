const isPrime = (number) => {
    if (number < 1 ) return false

    let isPrimeNumber = true
    for (let index = 2; index<number; index++){
        if (number % index === 0){
            isPrimeNumber = false
            break
        }
    }
    return isPrimeNumber
}
const u = isPrime(7)
console.log(u)