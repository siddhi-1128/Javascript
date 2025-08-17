
// let square = (a) => {
//     return a * a;
// }

let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);