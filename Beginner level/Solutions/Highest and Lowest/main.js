// DESCRIPTION:

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


// Notes

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
    // convert String to Array and convert numbers from String to number 
    let arrNumber = [...numbers].join("").split(" ").map((e)=> +e );
    // Use Math.max and Math.min 
    arrNumber = [Math.max(...arrNumber),Math.min(...arrNumber)];
    // convert Array to String 
    return arrNumber.join(" ").toString()
}