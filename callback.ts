// 🧪 Assignments (1–5: foundational, 6–10: more challenging) 

// 1) Hello Callback 
// Write a function that takes a callback and calls it with 'Hello from callback!'. 

const helloCallback = () =>{
    console.log('Hello from callback!');
};
helloCallback();

// 2) Delayed Greeting 
// Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'. 

// type GreetingCallback = (message: string) => void;

// const sayHelloLater = (greetingCallback: GreetingCallback) => {
//     console.log('Waiting for greeting...');
//     setTimeout(() => {
//         const message = "Hi, I am late!";
// greetingCallback(message);
//     }, 2000);
// }

// const greetingCallback = (message: string): void => {
//     console.log(message);
// };
// sayHelloLater(greetingCallback);

// 3) Math Callback 
// Create a function that takes two numbers and a callback. The function should add the numbers and send the result to the callback. 

// type SumCallback = (result: number) => void;

// const addNumbers = (num1: number, num2: number, callback: SumCallback): void => {
//     const sum = num1 + num2;
//     callback(sum);
// }
// const sumCallback = (result: number): void => {
//     console.log(`The sum is: ${result}`);
// }
// addNumbers(5, 10, sumCallback);

// 4) Uppercase Callback 
// Write a function that takes a string and a callback. The callback should return the string in uppercase. 

// const toUpperCase = (input: string, callback: (result: string) => void): void => {
//     const uppercased = input.toUpperCase();
//     callback(uppercased);
// }

// const upperCaseCallback = (result: string): void => {
//     console.log(`Result in uppercase is : ${result}`);
// };

// toUpperCase('my name is Aiste', upperCaseCallback);

// 5) Pizza Order 
// Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'. 

// type orderStatusCallback = (message: string) => void;

// const orderMyPizza = (orderStatus: orderStatusCallback) => {
// console.log('Pizza order being made...');
// setTimeout(() => {
//     const message = "Your pizza is ready!";
//     orderStatus(message);
// }, 3000);
// };

// const orderStatus = (message: string)=>{
//     console.log(message);
// }

// orderMyPizza(orderStatus);

// 6) Multiple Messages 
// Make a function that takes a callback and calls it three times with different messages. 

// 7) Download Simulation 
// Create a function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'. 

// 8) Success and Error Callback 
// Make a function that takes two callbacks: one for success and one for error. Use Math.random() to decide which to call. 

// 9) Math with Different Operations 
// Write one function that can do addition, subtraction, multiplication, and division. It should take two numbers, an operation string, and a callback. 

// 10) Chained Callbacks 
// Make three functions that each wait 1 second and then call the next callback, printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order. 

 