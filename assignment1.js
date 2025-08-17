// Question 1

// let arr = [1,2,3,4,5,6,6];

// let num = 2;
 
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == num){
//         arr.splice(i , 1);
//     }
    
// }

// console.log(arr);


// Question 4 factorial of a no.
// let num = prompt("Enter the number");

// let fact = 1;

// for (let i = num ; i > 0; i--) {
//     fact = fact * i;
    
// }

// console.log(fact);

// Question 5 find largest no. in a array
// let arr = [];

// let num = prompt("Enter the number you want add in array");

// for (let i = 0; i < num; i++) {
//     let no = prompt("Enter the number");
//     arr.push(no);
// }
// let large = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             large = arr[i];
//         }    
//     }
// }

// console.log(large);

//Question 2 count the digit in the number
// let num = prompt("Enter the number");
// let count = 0;
// let n = 0 ;
// while (num !=0) {
//     n = num % 10;
//     num = parseInt(num/10);
//     count++;
// }

// console.log(count);

//Question 3 addition of the number 
let num = prompt("Enter the number");
let count = 0;
let n = 0 ;
while (num !=0) {
    n = num % 10;
    num = parseInt(num/10);
    count=count + n;
}

console.log(count);