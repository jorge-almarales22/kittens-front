# Prueba Tecnica Holafly

## Tecnologías utilizadas en la prueba
- React.js
- Redux
- React Router Dom
- Docker
- Node.js
- Express.js

## DevOps
- DockerHub
- Continue integration(CI) y continue deployment(CD) a servidores de Digital Ocean

## URL de producción
- Cliente: https://dolphin-app-8rves.ondigitalocean.app/
- Backend: https://kittens-back-production.up.railway.app/kittens

## Como correr proyecto localmente con DOCKER
- Clonar la API https://github.com/jorge-almarales22/kittens-back.git e instalar dependencias con: (npm install) despues correr npm run dev.
- Descargar imagen de Docker: docker pull jeada22/kittens
- Correr app con docker run -it -p 5000:3000 -d jeada22/kittens
- SEGUNDA OPCION: Puede correr todo con un simple comando docker compose up -d

## Como correr proyecto localmente SIN DOCKER
- Clonar la API https://github.com/jorge-almarales22/kittens-back.git e instalar dependencias con: (npm install) despues correr npm run dev.
- Clonar frontend https://github.com/jorge-almarales22/kittens-front.git e instalar dependencias con (npm install) despues correrlo con npm start
