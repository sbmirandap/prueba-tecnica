# Instalación de repositorio

Al descargar esta app, basta con correr `npm install`, en donde se instalarán todas las dependencias necesarias. Recomendamos fuertemente usar NVM y escoger node 20.

## Evaluación

Luego de tener instalado este repo, nos gustaría ver tu comportamiento en las aplicaciones de frontend. En este
repo viene instalado todo lo necesario para que comiences una nueva App web, con algunas librerías ya establecidas
por nosotros. El requerimiento será mostrar en esta aplicación web la información entregada por una API pública, a
modo de Marketplace, en donde podrás utilizar componentes creados por tí (o sea HTML y CSS) o bien utilizar
aquellos de una librería de estilos que está instalada en este repo (MUI, verás un link en el componente principal y algunos ejemplos de implementación de componentes).

- Aquí un guía básica visual de de cómo queremos que presentes la información ([Draw.io](https://drive.google.com/file/d/1WQG5JDl8qXfW7sdheUX-y_qjENrGj4al/view?usp=sharing))
- Aquí hay un ejemplo de una API pública ([Api futurama](https://www.sampleapis.com/api-list/futurama)) con imágenes, en la seccion "characters"
- Puedes instalar otras librerias si lo estimas conveniente
- Para iniciar la app en modo desarrollador basta el comando `npm run start`
- Existen puntos extras por:
  - Diseño
  - Modularización de componentes
  - Routeo
  - Testing

# Testing
 Se utilizará una librería de testing llamada PlayWright, en donde sus dependencias se instalan
así (NO sobreescribir los archivos ya existentes):
- `npx playwright install`
- `npx playwright install-deps`

El comando  `npx playwright install-deps` es para instalar las dependencias de playwright, que es solamente soportado para MacOS y Ubuntu. Si tienes otra distrubición de Linux probablemente necesites algunos pasos extra para la instalación de dependencias. Algunas librerías que te podrían faltar podrían ser las siguientes: `enchant`, `icu`, `libwebp` y/o `libffi7`

Finalmente, para correr ejecutar los tests basta el comando `npx playwright test` o con interfaz gráfica `npx playwright test --ui`


Deberás subir tu desarrollo a un repositorio público que deberás compartir para su evaluación (Puedes hacer un fork de este repo, es más simple)


Happy coding!
