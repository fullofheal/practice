// 'use strict';

const arr = [1, 12, 3, 62, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}
// // arr[99] = 0;

// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, a, arr){
//     console.log(`${a}: ${item} внутри массива ${arr}`);
// });
// // arr.pop();
// // arr.push(10);

// // console.log(arr);

// // for(let i = 0; i< arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for(let value of arr) {          // we use this format instead of forEach when we need to use break or continue;

//     console.log(value);
// } 

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));