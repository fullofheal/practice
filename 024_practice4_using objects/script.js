'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
        return personalMovieDB.count;
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count !=null && personalMovieDB.count !='') {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log ('Error');
        }
    },
    showMyDb: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    WriteYourGenres: function () {
        for(let a = 1; a < 2; a++){
        //     personalMovieDB.genres[a - 1] = prompt(`Ваш любимый жанр под номером ${a}`);
        //     // const q1 = prompt(`Ваш любимый жанр под номером ${a}`);
        //     // personalMovieDB.genres[a-1] = q1;
        //     // -------------------------------------
        //     // personalMovieDB.genres[a-1] = prompt(`Ваш любимый жанр под номером ${a}`);
        // // let q1;
        // while(personalMovieDB.genres[a - 1] =='' || personalMovieDB.genres[a - 1] == null || !isNaN(personalMovieDB.genres[a - 1])) {
        //     personalMovieDB.genres[a - 1] = prompt(`Ваш любимый жанр под номером ${a}`);}
        // //     q1 = prompt('Ваш любимый жанр под номером '+ a, ''); 
        // // }
        // // personalMovieDB.genres[a - 1] = q1;
        // // personalMovieDB.genres.push(q1);
        // }
        // // personalMovieDB.genres.forEach (function(value, index, array) {
        // //     console.log(`Любимый жанр #${index+1} - это ${value}`);
        // // });
        let genres = prompt('Введите ваши любимые жанры через запятую.');

        if (genres === '' || genres === null || !isNaN(genres)) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе.');
            a--;
        } else {
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
        }


        personalMovieDB.genres.forEach ((value, index) => {
                console.log(`Любимый жанр #${index+1} - это ${value}`);
            });
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
    // toggleVisibleMyDB: function() {
    //     if(personalMovieDB.privat === false) {
    //         personalMovieDB.privat = !personalMovieDB.privat;
    //     } else {
    //         personalMovieDB.privat = !personalMovieDB.privat;
    //     }
    // }
};

personalMovieDB.showMyDb(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDb(personalMovieDB.privat);

