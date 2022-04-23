
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try{
        
        
        let salida = '', consola = '';
        
        for(let i = 1; i <= hasta; i++ ) {
            salida  += `${ i } X ${ base } = ${ i * base }\n`;
            consola += `${ colors.bold.green(i) } ${'X'.red} ${ colors.bold.green(base) } = ${ colors.bold.cyan(i * base) }\n`;
        }
        //Si desea imprimir el resultado en consola.
        if (listar)   {
            console.log('====================='.blue);
            console.log('     TABLA DEL'.gray, colors.green(base));
            console.log('====================='.blue);
            console.log(consola);
        }
            
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    
        return `tabla-${ base }.txt`;
    }
    catch ( error ){
        throw error;
    }

}
module.exports = {
    crearArchivo
}