function longestWord(text){
    let strToArray = text.split(" ");

    let longestWord = strToArray[0];
    for (const word of strToArray) {
        if (longestWord.length < word.length) {
            longestWord = word;
            
        }
    }
    console.log("The longest word is" , longestWord);
};

let text = "I am learning Programming to become a programmer"

longestWord(text);