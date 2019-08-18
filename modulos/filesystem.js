const fs = require('fs');

// Código asíncrono
fs.writeFile('./texto.txt', 'Texto a insertar', function(error){
    if (error){
        console.log(error);
    }
    console.log('Archivo creado');
});

// Códugo bloqueante, debe esperara a que termine para realizar la siguiente linea de código
// const resultado = fs.writeFile('','','');

// Leer el archivo

fs.readFile('./texto.txt', function(error, data){
    if (error){
        console.log(error);
    }
    console.log(data.toString());
});

console.log('Última línea de código');