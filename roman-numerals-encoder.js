/*
Create a function that takes a Roman numeral as its argument and 
returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI",
uses each letter in descending order.
*/
const romanNumeral = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};

function romanNumeralEncoder(num) {
    const romanKeys = Object.keys(romanNumeral)
        .map(Number)
        .sort((a, b) => b - a); 

    let result = '';
    let remaining = num;
    for (const key of romanKeys) {
        while (remaining >= key) {
            result += romanNumeral[key];
            remaining -= key;
        }
    }

    return result;
}

