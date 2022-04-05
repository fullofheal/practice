/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll('.promo__adv img');

ads.forEach(item => {
    item.remove();
});

// for(let i = 0; i < 3; i++) {
//     ads[i].remove();
// }

// -------------------------------------------------
// const genre = document.querySelector(".promo__genre");      
// genre.textContent = 'Драма';

// OR instead of document. we can refer to the class above

const poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre');


genre.textContent = 'Драма';
// // .promo__bg{height:360px;background:url("../img/mars.webp")

poster.style.backgroundImage = 'url("img/bg.jpg")';
// const background = document.querySelectorAll('.promo_bg');

// background[1].replaceWith('url("../img/bg.jpg")');

// 4)
const movieList = document.querySelector('.promo__interactive-list');

movieList.innerHTML = "";

movieDB.movies.sort();

// console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}) ${film}<div class="delete"></div>
        </li>
    `;
});

// a = a + 1;
// a += 1; 

