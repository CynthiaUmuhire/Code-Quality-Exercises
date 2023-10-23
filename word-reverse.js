const reverseVowels = (str) =>{
    let vowels = []
    const stringArray = str.split("")
    const sampleVowels = ["a","e","o","i","u","A","E","O","I","U"]
    stringArray.forEach((letter) => {
        if(sampleVowels.includes(letter)){
            vowels.push(letter)
        }
    })
     vowels.reverse();
    const reversedString = stringArray.map((character) => {
        if (sampleVowels.includes(character)){
            return vowels.shift()
        }
        return character
    })
    return reversedString.join("")
}


console.log(reverseVowels("Reverse Vowels In A String"));