'use strict';

function first() {
    // Do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
} 

function done () {
    console.log('I finished this lesson');
}

// learnJS('JavaScript', done);

learnJS('JavaScript', function() {
    console.log('I finished this lesson');
});