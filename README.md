
# Projet Baptiste Raconte

## Informations

Projet réalisé dans le cadre de la formation Graduate Developer.
Il s'agit d'un site de lecture de nouvelles.

## Comment installer l'application ?
* **Installation**
```
$ git clone https://github.com/Far-Traveller/baptiste-raconte.git
```
```
$ cd baptiste-raconte
```
```
$ npm install
```
```
$ composer install
```
* **Création base de données** : *Pensez à modifier la DATABASE_URL dans le fichier .env avant de continuer !*

```
$ php bin/console doctrine:database:create
$ php bin/console doctrine:migrations:migrate
```
* **Initialisation** d'un administrateur, d'utilisateurs, de nouvelles et de contacts :
```
$ php bin/console doctrine:fixtures:load
```
* **Accès au site en local :**
  *Avec Symfony*
```
$ symfony serve
```
*Avec Composer*
```
$ composer require symfony/web-server-bundle --dev
$ php bin/console server:start
```

Le site est en ligne ici : https://dashboard.heroku.com/apps/baptiste-raconte
