'use strict';

const button = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// button.onclick = function () {
//     alert ('Click');
// };

// button.onclick = function () {
//     alert ('Second click');
// };

// button.addEventListener('click', () => {
//     alert('Click');
// });

// button.addEventListener('mouseenter', (event) => {
//     console.log (event.target);
//     event.target.remove() ;
//     // console.log ('hover');
// });

// let i =0;

const deleteElement = (event) => {
    // event.target.remove();
    console.log(event.target); // (event.currentTarget) or (event.target)
    console.log(event.type);
    // i++;
    // if(i == 1){
    //     button.removeEventListener('click', deleteElement);
    // }
};
// button.addEventListener('click', deleteElement);
// button.removeEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// button.forEach((value, a) => {
//     button[a].addEventListener('click', deleteElement);
//     // value.addEventListener('click', deleteElement);
// });

button.forEach((value, a) => {
    button[a].addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});