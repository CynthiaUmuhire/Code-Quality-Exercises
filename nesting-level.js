function findNestingLevels(array) {
    let count = 0;

    array.forEach((arrayItem) => {
        //check if the arrayItem is an array
        if (Array.isArray(arrayItem)) {
            let tempCount = findNestingLevels(arrayItem);
            if (tempCount > count) {
                count = tempCount;
            }
        }
    })
    return count + 1;
}
function flattenArray(array) {
    if (!Array.isArray(array)) return "The input is not an array"
    const nestingLevel = findNestingLevels(array)
    return array.flat(nestingLevel)
}

console.log(flattenArray([[[1, 2, 3, 4], 4],6,[8,9]]))