const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${colors.green(archivo)} creado`))
            .catch(err => console.log(err));
        break;

    default:
        console.log(`Comando "${comando}" no reconocido`);
        break;
}















