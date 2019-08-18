# Node JS

NodeJS es un entorno de ejecución de javascript construido sobre el motor V8 de javascript de Chrome. Es multiplataforma.

Para instalarlo vamos al sitio web [nodejs.org](https://nodejs.org/en/) y descargamos el instalador para los diferentes sistemas operativos.

NodeJS puede manejar una gran cantidad de usuarios al mismo tiempo, porque divide las tareas.

> **NOTA** Como requerimiento, es indispensable que conozca HTML, CSS y JS

## Primeros pasos en nodeJS

Node ejecuta archivos de javascript, de modo que creamos un archivo de javascript para ejecutarlo en el SO por medio de nodeJS.

Para ejercutar el archivo, debemos estar en el mismo directorio donde se encuentra el archivo y ejecutarlo  usando:

- `node initial.js`

Para eso debemos tener creado el archivo `initial.js` con el contenido `console.log("Hola mundo")`;

Para abrir la terminal desde VSCode sólo presionamos **ctrl**+**j** y se abre la terminal en el directorio en el que se encuentra el archivo.


Cada parte de la aplicación en nodeJS se conoce como **modulo**

El archivo principal se acostrumbra llamarlo como *index.js*


Para importar un archivo en **nodeJS** usamos la palabra clave **require(`'./filename.js'`);**. Sin embargo, para que lo pueda reconocer el otro archivo debemos usar la palabra clave **exports** para que pueda ser utilizado el código. 

```js
const math = require('./math.js');

console.log(math.add(1,2));
console.log(math.substract(1,2));
```

En este archivo tenermos el archivo que se usará como módulo [math.js](math.js) en el archivo que se solicita [index.js](index.js)

Otra forma de exportar el módulo como objeto, es usando la propiedad `module.exports = Math` donde *Math* es el objeto.

Siguiendo con el ejemplo del archivo  [math.js](math.js) quedaría como
```js
const Math = {}

/*
 .. Funciones del archivo ...
*/
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;
```

Por defecto nodejs viene con módulos preinstaladados con los que podemos trabajar.
Para llamar estos archivos, usamos la palabra reservada **require()**

```js
const os = require('os');
console.log(os);
```

La documentación de los módulos que viene en la API la podemos encontrar en [Api nodeJS](https://nodejs.org/dist/latest-v12.x/docs/api/)


## Modulo para trabajar con archivos `file system`

Este módulo nos permite trabajar co archivos en el sistema operativo.

`const fs = require('fs')`

Es importante este módulo porque cuando trabajamos con servidores o programas, necesitamos interactuar con los archivos.

- **fs.writeFile('file', 'data_write', callback(error))** Nos permite escribir un archivo

- **fs.readFile('file', callback(error, data))**


## Módulo http (Servidores)

NodeJS tiene un módulo que permite crear servidores. Este módulo se conoce como **http**

Un ejemplo de creación de servidor web usando nodeJS es el siguiente

```js
const http = require('http');

const handleServer = function(req, resp){
    resp.writeHead(200, {'Content-type': 'text/html'});
    resp.write('<h1>Hola mundo desde NodeJS</h1>');
    resp.end();
}

const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Servidor en el puerto 3000');
});
```

- [Ver códigos de estado http](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)

- [Códigos de estado de respuesta HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Status)



## Trabajando con `npm`

npm (Node Package modules) es el repositorio más grande de internet, y contiene una gran cantidad de recursos para integrar en nodeJS

- `npm install colors`  Instala un paquete de colores para la consola usando npm


### Crear lista de modulos para instalar

- **npm init** Este comando pide información del archivo

Luego de escribir todo lo requerido, nos crea un archivo de configuración llamado `package.json`, da información acerca del proyecto e indica las dependencias, es decir, los módulos requeridos por la aplicación.

- **npm install** Instala las dependencias que necesita nuestro proyecto, estos módulos los toma del archivo `packaje.json`

```json
"scripts": {
    "start": "node http.js"
  },
```

Esta propiedad nos permite iniciar scripts o configuraciones necesarias para el proyecto, se ejecuta automáticamente luego de colocar `npm install`, en este ejemplo ejecutaría un  servidor.

- **npm run start** Ejecuta el script que se define el la propiedad `scripts` del archivo *packaje.json*. Uno puede definir las propiedades con los scripts que uno requiera.


### Framework para nodeJS

Hay un framework muy usado en nodeJS llamado express que nos permite crear servidores de una manera más sencilla. Para instalarlo usamos el comando 

- **npm install express**