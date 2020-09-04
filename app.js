const argv = require('./config/yargs').argv;

const colors = require("colors");



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log("Archivo creado: " + archivo)
        ).catch(error => console.log(error));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log("comando no reconcido");
}