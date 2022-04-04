'use strict';

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
    //   hearts = document.querySelectorAll('.heart'),
    //   oneHeart = document.querySelector('.heart');
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; // used to apply a few changes simultaneously

buttons[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// how to apply same changes to multiple items?

// for (let i = 0; i < hearts.length; i++) {                    //can be used but he says we dont usually use cycles in such situations as we have special functions for this purpose
//     hearts[i].style.borderRadius = '100%';
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
    item.style.borderRadius = '100%';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div); // inserts at the end
// wrapper.appendChild(div);

// wrapper.prepend(div); // вставляет в начало какой-то элемент

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[2]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = 'Hello';

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');