// Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */
function addTwo(number : number): number {
    return number + 2;
}

//To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
/* Create a function addS that accepts one input and adds an "s" to it.*/

function addS(string : string):string{
    return string + "s";
}
// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
/* Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
function map(numbers: number[], callback: (number: number) => number): number[] {
    const result: number[] = [];

    for (const number of numbers) { //For each number in the array, the callback is called, and its returned value is added to the result array.
        result.push(callback(number)); 
    }
    return result;
}
console.log(map([1, 2, 3], addTwo));