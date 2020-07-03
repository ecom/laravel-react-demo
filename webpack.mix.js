const mix = require('laravel-mix');

mix.ts('resources/js/app.ts', 'public/js');

mix.browserSync('localhost:8000');
