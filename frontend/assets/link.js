const express = require('express');
const mime = require('mime-types');

    const app = express();

    // ...

    app.use(express.static('frontend', {
        setHeaders: (res, path) => {
            res.setHeader('Content-Type', mime.lookup(path) || 'application/octet-stream');
        },
    }));

// let btnLogo = document.querySelector(".logo");

// btnLogo.addEventListener('click', function() {
//     window.location.replace('/frontend/assets/');
// }, false);