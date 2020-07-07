const mix = require('laravel-mix');

mix.ts('resources/react/index.tsx', 'public/js/app.js').extract().sourceMaps();

mix.browserSync('192.168.10.10');
