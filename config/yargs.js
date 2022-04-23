const { demandCommand, describe } = require('yargs');

const argv = require('yargs')

//opcion de dar valor a la base
.option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
        })
.option('l',{
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'Mostrar el resultado de la multiplicacion.'
    })
.option('h',{
    alias: 'hasta',
    type: 'number',
    default:10,
    describe: 'Establece hasta donde debe llegar la tabla de multiplicar.'
})
.check( (argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser numero.';
    }
    if(isNaN(argv.h)){
        throw 'El limite debe ser un numero entero positivo';
    }
   return true;
    
})
.argv;

module.exports = argv;