'use strict';

const btn = document.querySelector('.btn');
const header = document.querySelector('.header');

btn.addEventListener('click', function() {
    header.classList.toggle("red");
    console.log('done');
});
