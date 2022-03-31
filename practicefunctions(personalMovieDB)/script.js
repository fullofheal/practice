'use strict';

/*jslint node: true */
"use strict";

let numberOfFilms;



function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}

start();

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

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const q11 = prompt('Один из последних просмотренных фильмов?', '');
        const q12 = prompt('На сколько его оцените?', '');
    
    if (q11 != null && q12 != null && q11 != '' && q12 != '' && q11.length < 50) {
        personalMovieDB.movies[q11] = q12;
        console.log('done');
    } else {
        console.log('error');
        i--;}
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10 && numberOfFilms !=null && numberOfFilms !='') {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >=10 && numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms >= 30) {
        console.log('Вы киноман');
    } else {
        console.log ('Error');
    }
}

detectPersonalLevel();

// function showMyDb(){
//     if(personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     }
// }

// showMyDb();

function showMyDb(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);


function WriteYourGenres(){
    for(let a = 1; a < 4; a++){
        // const q1 = prompt(`Ваш любимый жанр под номером ${a}`);
        // personalMovieDB.genres[a-1] = q1;
        // -------------------------------------
        // personalMovieDB.genres[a-1] = prompt(`Ваш любимый жанр под номером ${a}`);
    let q1;
    while(q1 =='' || q1 == null || !isNaN(q1)) {
        // q1 = prompt(`Ваш любимый жанр под номером ${a}`);
        q1 = prompt('Ваш любимый жанр под номером '+ a, ''); 
    }
    // personalMovieDB.genres[a - 1] = q1;
    personalMovieDB.genres.push(q1);
    }
}

WriteYourGenres();

// console.log(personalMovieDB);