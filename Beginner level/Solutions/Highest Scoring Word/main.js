// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



function high(x){
    // convert String to Array
    x = x.split(" ");
    //Createing variables
    let maxValueWord = 1;
    let highestScoringWord = "";
    // loop
    for(let i = 0 ; i <  x.length ; i++) {
        // Value Ascii code of word
        let asciiCodeWord = x[i].split("").map((ele) => ele.charCodeAt() - 96).reduce((ele,acc)=>ele+acc);
        // Check value word gatter than maxValueWord
        if(asciiCodeWord > maxValueWord) {
            // Change value maxValueWord 
            maxValueWord = asciiCodeWord;
            // Add String in variable highestScoringWord
            highestScoringWord = x[i];
        }
    }
    // return highest Scoring Word
    return highestScoringWord;
}


console.log(high('aa b'));
