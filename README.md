# Laravel React Demo System

-   PHP 7
-   MySQL/Postgres
-   Laravel 7
-   Node.js
-   TypeScript
-   React
-   Material-UI
-   Vagrant

## Development

### First Run

```
git clone git@github.com:ecom/laravel-react-demo.git
cd laravel-react-demo
cp .env.dev.example .env
composer install
npm install
php vendor/bin/homestead make

vagrant up
vagrant ssh
php artisan migrate --seed
exit

npm start
```

### Daily Run

```
vagrant up
npm start
```

### Test Account

```
username:   admin@example.com
password:   password

username:   user@example.com
password:   password
```
