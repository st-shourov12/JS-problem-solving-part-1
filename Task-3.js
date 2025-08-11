function vowel(text){
    let strToArray = text.split("");
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    
    for (const letter of strToArray) {
        if (letter.toLowerCase().includes("a")) {
            a ++;
            
        } 
        else if (letter.toLowerCase().includes("e")) {
            e ++;
            
        }
        else if (letter.toLowerCase().includes("i")) {
            i ++;
            
        }
        else if (letter.toLowerCase().includes("o")) {
            o ++;
            
        }
        else if (letter.toLowerCase().includes("u")) {
            u ++;
            
        }
    }

    console.log("In this text there a vowels are ", a);
    console.log("In this text there e vowels are ", e);
    console.log("In this text there i vowels are ", i);
    console.log("In this text there o vowels are ", o);
    console.log("In this text there u vowels are ", u);
};

// change text as you want
let text ="This is Shourov , a Front-End Developer, who is in learning process. This is an interesting proffession . Cause there is no full stop in this learning process. I have to make myself upgrade day by day or I will be erased from this tech world ";


// call function from here
vowel(text);


