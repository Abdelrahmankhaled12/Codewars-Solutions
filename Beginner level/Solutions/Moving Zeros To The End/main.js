
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



// sloution 1

function moveZeros(arr) {
    return arr.filter((e) => e !== 0).concat(arr.filter((e) => e === 0));
}

// sloution 2

// function moveZeros(arr) {
//     let array=[],
//     index = 0;
//     arr.map((e)=> e===0 ? array.push(e) && index++: array.unshift(e));
//     return index > 0 ? array.slice(0,-index).reverse().concat(array.slice(-index)) : array.reverse();
// }

console.log(moveZeros([false,1,1,2,0,1,0,3,"a"]))

