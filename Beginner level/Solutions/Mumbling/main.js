// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
    // convert Srring to Array
    let arr = [...s];
    // Create Variable Result
    let result = "";
    for(let i = 0 ; i < arr.length ; i++) {
        // Capitalize the First Letter
        result = result + arr[i].toUpperCase();
        // loop => Repeat Lowercase Letters
        for(let n = 0 ; n <i ; n++) {
            result= result + arr[i].toLowerCase();
        }
        // Add ( - )
        result = result + `${i == arr.length - 1 ? "" : "-"}`;
    }
    // return Result 
    return result;
}


console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));



// Best Practices
// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
// This Wouldnot be my solution But i Wanted to share it 