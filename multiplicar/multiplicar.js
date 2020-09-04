const fs = require('fs');
const colors = require("colors");

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("El valor introducido no es un número");
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += base + '*' + i + '= ' + i * base + '\n';
        }


        fs.writeFile('tablas/tabla-' + base + '-al-' + limite + '.txt', data, (err) => {
            if (err) reject(err)
            else
                resolve('tabla-' + base + '-al-' + limite + '.txt')
        });
    });
}

let listarTabla = (base, limite = 10) => {
    console.log("=====Tabla de multiplicar====".green);
    for (let i = 1; i <= limite; i++) {
        console.log(base + '*' + i + '= ' + i * base);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
}