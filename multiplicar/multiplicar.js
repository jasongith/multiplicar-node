const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('--------------'.green);
    console.log(`Tabla del ${base}`);
    console.log('--------------'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {
        if (!Number(base)) {
            rej(`"${base}" no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) {
                rej(err);
            } else {
                res(`tabla${base}`);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}