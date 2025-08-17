let arr = [10,30,7,90,20,40,60];
// arr.every((el) => (el % 2 == 0));
// let finalVal = arr.reduce((res , el) => (res +el));
// console.log(finalVal);

// let max = arr.reduce((max , el) => {
//     if(max < el){
//         return el;
//     }else{
//         return max;
//     }
// })
// console.log(max);

// let a = arr.every(el => el % 10 == 0);
// console.log(a);

let min = arr.reduce((min , el) => {
    if(min > el){
        return el;
    }else{
        return min;
    }
})
console.log(min);