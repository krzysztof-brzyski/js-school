// ARRAY: [1,6,23,8,4,8,3,7]

const myArray =[1,6,23,8,4,8,3,7];
const myArray2 =[1,6,23,8,5];

// //1. Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// function sum(data){
//     let result = 0;
//     for(let i=0; i < data.length; i++){
//         result += data[i]
//     }
//     return result;
// }
// result = sum(myArray);
// console.log(sumArray);

//2. Create a function that returns sum of first and last elements of given array.
// let sum = (data) => data[0] + data[data.length-1];
// console.log(sum(myArray));

//OTHER FUNC
// function sum(data){
//     let a = data[0];
//     let b = data[data.length-1];
//     result = a + b;
//     // or result = data[0] + data[data.length-1];
//     return result;
// }
// console.log(sum(myArray));


//3. Create a function that takes a number and return factorial of that number.

// function factorialCalc(data){
//     if (data === 0 || data === 1){
//         return 1;
//     }else{
//         for(let i=data-1; i>=1; i--){
//             data *= i;
//         }
//     }return data;
// }

// let number = 4;
// console.log(factorialCalc(number));

//4. Create a function that returns given array in reverse order. // no build in functions  
// function reverseOrder(data){
//     let newArray = [];
//     //let arrayLength = data.arrayLength;
//     for(let i=data.length-1; i>=0;i--){
//         newArray.push(data[i]);
//     }
//     return newArray;
// }
// console.log(reverseOrder(myArray));

//5. Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// sum = (data) => {
//     let newArray = [];
//     for(let i = 0; i < data.length-1; i++){
//         if(data.indexOf(i) % 2 != 0){ newArray.push(data[i]+data[i+1])} ;
//     }
//     return newArray;
// }
// console.log(sum(myArray));

//6. For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// sum = (data) => {
//     let newArray = [];
//     for(let i = 0; i < data.length-1; i++){
//         if(data.indexOf(i) % 2 != 0 && i < data.length-2){
//             newArray.push(data[i]+data[i+1])
//         }else if(i == data.length-2){
//             newArray.push(data[i+1]+data[i+1])
//         }
//     }
//     return newArray;
// }
// console.log(sum(myArray2));


//7. Create a function the return one random element from given array. // use random function 
// const rand = function(data){
//     return data[Math.floor(Math.random() * data.length)];  
// }
// console.log(rand(myArray));

//8. Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

// function randomMin(data, times){
//     const newArray = [];
//     for(let i = 0; i<times; i++){
//         newArray.push(data[Math.floor(Math.random() * data.length)]);
//     }
//     let min = newArray[0];
//     for(let i=1; i<newArray.length; i++){
//         if(min>newArray[i]){
//             min = newArray[i];
//         }
//     }
//     console.log(newArray);
//     return min;
// }
// console.log(randomMin(myArray,4));


//9. Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
//nie działa!

//myArray3 = [1,7,5]

// function arrayChange(data){
//     let oldArray = data;
//     let newArray = [];
//     for(let i = data.length; i > 0; i--){
//         newArray.push(oldArray[Math.floor(Math.random() * oldArray.length)]);
//         oldArray.splice(i);
//         console.log(oldArray);
//     }
//     return newArray;
// }

// console.log(arrayChange(myArray3));

//10. Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

// function countSomething(data){
//     let number = 0; 
//     for(i=0; i<data.length; i++){
//         Math.round(Math.random()) == 1 ? number += data[i]  : number -= data[i];
//     }
//     return number;
// }
// console.log(countSomething(myArray));

//11. Create a function that will return the current day name in Polish. 

// function displayDay(){
//     let d = new Date();
//     let dayNo = d.getDay();
//     let dayName;

//     switch (dayNo) {
//         case 0:
//             dayName = "Niedziela"  
//             break;
//         case 1:
//             dayName = "Poniedziałek"  
//             break;
//         case 2:
//             dayName = "Wtorek"  
//             break;
//         case 3:
//             dayName = "Środa"  
//             break;
//         case 4:
//             dayName = "Czwartek"  
//             break;
//         case 5:
//             dayName = "Piątek"  
//             break;
//         case 6:
//             dayName = "Sobota"  
//             break;
//         default:
//           break;
//       }
//     return dayName;
// }

// console.log(displayDay());

//12. Create a function that tells us how many days till Friday 

// function daysToFriday(){
//     let d = new Date();
//     let dayNo =  d.getDay();
//     let friday = 4;
//     let daysLeft;
//     if(dayNo < 4){
//         daysLeft = friday - dayNo; 
//         return 'zostało ' + daysLeft + ' dni';
//     }else if(dayNo == 6){
//         return ' zostało 5 dni';
//     }else{
//         return 'mamy piątek';
//     }
// }

// console.log(daysToFriday());

//13. Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

function calculate(a,b){
    let calculate ={}

    calculate.sum = a+b;
    calculate.sub = a-b;
    calculate.multi = a*b;
    calculate.div = a/b;

    return calculate;
}

console.log(calculate(2,3));
