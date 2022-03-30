'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // link to the object

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy (mainObj){   //первый способ поверхностной копии объекта
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

// function copy (mainObj){ //попробовал сам создать копию внутреннего объекта
//     let objCopy = {};

//         for (let key in mainObj) {
//             if (typeof(mainObj.key) === 'object') {
//                 for (let key2 in mainObj.key) {
//                 objCopy.key.key2 = mainObj.key.key2;
//             }
//         } else {
//         objCopy[key] = mainObj[key];}
//     }

//     return objCopy;
// }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = {}; // not correct

const newNumbers = copy(numbers);

newNumbers.b = 17;
console.log(numbers);
console.log(newNumbers);

newNumbers.a = [3, 4, 5];

// console.log(newNumbers);
// console.log(numbers);

const add = {              //второй способ
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c',];   //третий способ для массива
const newArray = oldArray.slice();

newArray[1] = 'asdasdasd';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ['a', 'b'];         // четвертый

const newArr = [...array];

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};

newObj.one = 5;
console.log(q);
console.log(newObj);