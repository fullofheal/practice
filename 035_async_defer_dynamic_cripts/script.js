'use strict';

const p = document.querySelectorAll('p');
console.log(p);
// defer - скрипты загружаются по порядку.
// async - скрипты независымы друг от друга (не ждут).

// const script = document.createElement('script');
// script.src = 'script2.js';
// script.async = false;
// document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}
loadScript('script2.js');
loadScript('script3.js');