const mix = require('laravel-mix');

mix.ts('resources/ts/index.tsx', 'public/js/app.js').react().extract().sourceMaps();

//mix.browserSync('192.168.10.10');
