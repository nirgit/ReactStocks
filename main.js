requirejs.config({
//    baseUrl: '/',
    paths: {
        jquery: 'https://code.jquery.com/jquery-2.1.3.min',
        lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
        react: '//fb.me/react-with-addons-0.12.2'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react', './stocks'], function (React, Stocks) {
    'use strict';
    var elem = React.createElement(Stocks);
    React.render(elem, document.getElementById('container'));
});
