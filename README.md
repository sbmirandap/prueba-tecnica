# Instalación de repositorio

Al descargar esta app, basta con correr `npm install`, en donde se instalarán todas las dependencias necesarias.
Recomendamos fuertemente usar NVM y escoger node 20.
Además de esto se utilizará una librería de testing llamada PlayWright, en donde sus dependencias se instalan
así: 
- `npm init playwright@latest` (https://playwright.dev/docs/intro)

Si se requiere alguna dependencia todavía para correr los tests, bastaría con el comando:
 `npx playwright install-deps` , que es solamente soportado para MacOS y Ubuntu. Si tienes
 otra distrubición de Linux probablemente necesites algunos pasos extra para la instalación 
 de dependencias.

## Evaluación

Luego de tener instalado este repo, nos gustaría ver tu comportamiento en las aplicaciones de frontend. En este
repo viene instalado todo lo necesario para que comiences una nueva App web, con algunas librerías ya establecidas
por nosotros. El requerimiento será mostrar en esta aplicación web la información entregada por una API pública, a
modo de Marketplace, en donde podrás utilizar componentes creados por tí (o sea HTML y CSS) o bien utilizar
aquellos de una librería de estilos que está instalada en este repo (MUI, verás un link en el componente principal y algunos ejemplos de implementación de componentes).

- Aquí hay un ejemplo de una API pública (https://www.sampleapis.com/api-list/futurama)
- Puedes instalar otras librerias si lo estimas conveniente
- Para iniciar la app en modo desarrollador basta el comando `npm run start`
- Existen puntos extras por:
  - Modularización de componentes
  - Routeo
  - testing


Deberás subir tu desarrollo a este mismo repositorio


Happy coding!
