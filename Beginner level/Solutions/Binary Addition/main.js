
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)





    function addBinary(a, b) {
        // Sum Number 1 and Number 2
        let sum = a + b;
        // Create variable Result
        let result = "";
        // Use While for conver number to Binary
        while (sum != 0) {
        result = `${parseInt(sum % 2.0)}` + result;
        sum = parseInt(sum / 2.0);
        }
        // return number after convert Binary
        return result;
    }
    
    console.log(addBinary(1,2));