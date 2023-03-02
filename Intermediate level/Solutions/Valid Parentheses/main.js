// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100


function validParentheses(parens) {
    // your code here ..
    if(parens === "")
        return true;
    parens = parens.split("");
    let stack = [parens[0]];
    for (let i = 1; i < parens.length; i++) {
        stack.push(parens[i]);
        if (stack[stack.length - 2] == "(" && stack[stack.length - 1] == ")") {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length == 0 ? true : false;
}