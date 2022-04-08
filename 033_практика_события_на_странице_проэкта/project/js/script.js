/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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

    // ads.forEach(item => {
    //     item.remove();
    // });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    // for(let i = 0; i < 3; i++) {
    //     ads[i].remove();
    // }

    // -------------------------------------------------
    // const genre = document.querySelector(".promo__genre");      
    // genre.textContent = 'Драма';

    // OR instead of document. we can refer to the class above

    const poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre');


    // genre.textContent = 'Драма';
    // // .promo__bg{height:360px;background:url("../img/mars.webp")

    // poster.style.backgroundImage = 'url("img/bg.jpg")';
    // const background = document.querySelectorAll('.promo_bg');

    // background[1].replaceWith('url("../img/bg.jpg")');

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

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

    // 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    // новый фильм добавляется в список. Страница не должна перезагружаться.
    // Новый фильм должен добавляться в movieDB.movies.
    // Для получения доступа к значению input - обращаемся к нему как input.value;
    // P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// My attempt

    // const add = document.querySelector('.add'),
    //     button = add.querySelector('button'),
    //     input = add.querySelector('.adding__input');

    // const movieConfirm = () => {
    //     movieDB.movies.push(input.value);
    // };

    // button.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     movieConfirm();
    //     });
        
    // console.log(movieDB.movies);



    // 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    // новый фильм добавляется в список. Страница не должна перезагружаться.
    // Новый фильм должен добавляться в movieDB.movies.
    // Для получения доступа к значению input - обращаемся к нему как input.value;
    // P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    
// My attempt

// --------------------------------------------
// first solution

const addForm = document.querySelector('form.add'),
addInput = addForm.querySelector('.adding__input'),
checkbox = addForm.querySelector('[type="checkbox"]');
// deleteMovie = document.querySelectorAll('.delete');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

let newFilm = addInput.value;
const favorite = checkbox.checked;

// if (newFilm == "") {
//     alert('Нельзя вводить пустое значение!');
// } else {
//     movieDB.movies.push(newFilm);
// }

// OR

if (newFilm) {

    if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
    }
    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);

    createMovieList (movieDB.movies, movieList);
}

// OR


// movieDB.movies.push(newFilm);
// sortArr(movieDB.movies);

// createMovieList (movieDB.movies, movieList);

event.target.reset(); //addForm.reset();

});

movieDB.movies.sort();

const deleteMovies = document.querySelectorAll('.delete');
function createMovieList(films, parent) {
    parent.innerHTML = "";

    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}) ${film}<div class="delete"></div>
            </li>
        `;
    });
    console.log(deleteMovies);
    deleteMovies.forEach ((btn, i) => {
         btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
        });
    });
}

createMovieList (movieDB.movies, movieList);
deleteAdv(ads);
makeChanges();
sortArr(movieDB.movies);


});


