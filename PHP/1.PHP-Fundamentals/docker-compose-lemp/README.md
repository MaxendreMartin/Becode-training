# LAMP via Docker

La technologie Docker permet au développeur de télécharger et installer un environnement de développement prêt à l'emploi, tout fait qui tournera en machine virtuelle sur ta machine, donc faisant cohabiter le serveur de développement dans l' OS du développeur sans devoir chipoter avec les permissions ou modifier les fichiers-systèmes de son ordinateur. Merci Docker, tu es le bien.

Pour voir ce qu'installe ce package-ci, lis le fichier docker-compose.yml.

## Préliminaire

1. Si vous êtes sur Mac ou Windows, veillez à d'abord installer Docker Desktop: https://docs.docker.com/install/ 
1. Installer Docker: https://www.docker.com/docker-ubuntu  
1. Installer Docker Compose : https://docs.docker.com/compose/install/

## Utilisation

```sh
// Cloner ce repository
git clone git@github.com:becodeorg/docker-compose-lamp-stack.git

// Entrer dans le dossier de travail
cd docker-lamp 

// Lancer la machine virtuelle. Il faut parfois attendre 1 ou 2 minutes, surtout la première fois (il doit tout télécharger. Les fois suivantes sont plus rapides).
docker-compose up -d 
```

Et voilà!  Ton serveur Nginx est accessible à l'adresse : http://localhost:2020/ et PhpMyAdmin à l'adresse: http://localhost:8081/

Tu peux à présent travailler dans le dossier `./htdocs` : tout ce que tu y fais / mets est automatiquement accessible via l'adresse du serveur apache.

## Aller plus loin

- Si tu mets un fichier *.sql dans le dossier `data` il sera automatiquement importé dans la base de données lors du prochain lancement de `docker-compose up`.
- Tu peux modifier les ports en chipotant dans le fichier `docker-compose.yml`, puis relancer `docker-compose up`. 
