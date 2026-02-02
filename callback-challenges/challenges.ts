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

// Challenge 4
/* The function forEach takes an array and a callback, and runs the callback on each element of the array. 
forEach does not return anything.*/

let alphabet = "";
const letters = ["a", "b", "c", "d"];

function forEach <T>(array: T[],callback: (item : T) => void): void {
    for (const item of array) {
        callback(item);
    }
}

forEach(letters, function (character) {
  alphabet += character;
});
console.log(alphabet);
// should output abcd

// Challenge 5
/* Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. 
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));*/

function mapWith(numbers: number[], callback: (number: number) => number): number[] {
    const result: number[] = [];

    forEach(numbers, function(number) {
        result.push(callback(number));
    });
    return result;
}

console.log(mapWith([1, 2, 3], addTwo)); 
//should output [ 3, 4, 5 ]

// Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. 
For example it can sum all the numbers, multiply them, 
or any operation that you can put into a function.
*/
function reduce<T>(array : T[], callback : (accumulator : T, current : T) => T, initialValue : T) : T {
    let accumulator = initialValue;
    
    forEach(array, function(item) {
        accumulator = callback(accumulator, item);
    });
    return accumulator;
}

const nums = [4, 1, 3];
const add = function (a: number, b: number): number {
  return a + b;
};
console.log(reduce(nums, add, 0))
//should output 8
