/*jslint node: true */
"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
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

// let num = 0;

// while (num < 2) {
    
//     console.log(num);
//     num++;
// }

// const q11 = prompt('Один из последних просмотренных фильмов?', '');
// const q12 = prompt('На сколько его оцените?', '');
// const q21 = prompt('Еще один пример недавно просмотренного фильма?', '');
// const q22 = prompt('На сколько его оцените?', '');

// personalMovieDB.movies[q11] = q12;
// personalMovieDB.movies[q21] = q22;

for (let i = 0; i < 2; i++) {
    const q11 = prompt('Один из последних просмотренных фильмов?', '');
    const q12 = prompt('На сколько его оцените?', '');

if (q11 != null && q12 != null && q11 != '' && q12 != '' && q11.length < 50) {
    personalMovieDB.movies[q11] = q12;
    console.log('done');
} else {
    console.log('error');
    i--;
}
    // if (q11 && q12 == '') {
    //     alert ('Incorrect', '');
    // } else if (q11.length && q12.length > 50) {
    //     alert ('Maximum symbols allowed: 50', '');
    // } else {
    //     continue;
    // }

    // personalMovieDB.movies[q11] = q12;
} 
if (numberOfFilms < 10 && numberOfFilms !=null && numberOfFilms !='') {
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >=10 && numberOfFilms < 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms >= 30) {
    console.log('Вы киноман');
} else {
    console.log ('Error');
}
console.log(personalMovieDB);