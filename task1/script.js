/*jslint node: true */
"use strict";

const numberOfFilms = + prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {
//         q11
        
//     },
//     actors: {},
//     genres: [],
//     privat: false
// };

// const q11 = prompt('Один из последних просмотренных фильмов?', '');
// const q12 = prompt('На сколько его оцените?', '');
// const q21 = prompt('Еще один пример недавно просмотренного фильма?', '');
// const q22 = prompt('На сколько его оцените?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const q11 = prompt('Один из последних просмотренных фильмов?', '');
const q12 = prompt('На сколько его оцените?', '');
const q21 = prompt('Еще один пример недавно просмотренного фильма?', '');
const q22 = prompt('На сколько его оцените?', '');

personalMovieDB.movies[q11] = q12;
personalMovieDB.movies[q21] = q22;

console.log(personalMovieDB);