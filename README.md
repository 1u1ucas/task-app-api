### Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

### Étapes d'installation

1. Clonez le repository :

   ```bash
   git clone https://github.com/1u1ucas/task-app-api.git
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement (voir [Configuration](#configuration)).

4. Lancer les containers Docker : 

  ```
  docker compose up -d
  ```

5. Démarrez l'application :

   ```bash
   npm run start:dev
   ```

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet à partir du fichier .env-example.

## Documentation API

La documentation API est générée avec **Swagger** et accessible à l'adresse :

```
http://localhost:3000/api
```