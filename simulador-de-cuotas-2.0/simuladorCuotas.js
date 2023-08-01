const prompt = require("prompt-sync")({ sigint: true });

console.log('========== BIENVENIDO AL SIMULADOR DE CUOTAS ==========');

let ingresarMonto = true
let arrayHistorial = []

//bucle while en caso que se quiera volver a calcular con otro monto diferente
while(ingresarMonto === true) {
    let monto = parseInt(prompt('Ingrese monto: '))
    console.log(`su monto es: ${monto}`);

    let ingresarCantCuotas = true

    //bucle while en caso que se quiera calcular con otra cantidad de cuotas
    while(ingresarCantCuotas === true) {
        let cantCuotas = parseInt(prompt('Elija cantidad de cuotas (1, 3, 6 , 9, 12): '))

        switch(cantCuotas) {
            case 1: {
                console.log(` => Ud. debera pagar 1 cuota de: $${monto}`);
                let tiempo = new Date()
                let transaccion = `${tiempo.toLocaleTimeString()} => Monto: ${monto} | Cuotas: 1 | Valor de cuotas: ${monto}`
                arrayHistorial.push(transaccion);
                break;
            }
            case 3: {
                console.log(` => Ud. debera pagar 3 cuotas de: $${(monto + (monto*0.05))/3}`);
                let tiempo = new Date()
                let transaccion = `${tiempo.toLocaleTimeString()} => Monto: ${monto} | Cuotas: 3 | Valor de cuotas: ${(monto + (monto*0.05))/3}`
                arrayHistorial.push(transaccion);
                break;
            }
            case 6: {
                console.log(` => Ud. debera pagar 6 cuotas de: $${(monto + (monto*0.1))/6}`);
                let tiempo = new Date()
                let transaccion = `${tiempo.toLocaleTimeString()} => Monto: ${monto} | Cuotas: 6 | Valor de cuotas: ${(monto + (monto*0.1))/6}`
                arrayHistorial.push(transaccion);
                break;
            }
            case 9: {
                console.log(` => Ud. debera pagar 9 cuotas de: $${(monto + (monto*0.15))/9}`);
                let tiempo = new Date()
                let transaccion = `${tiempo.toLocaleTimeString()} => Monto: ${monto} | Cuotas: 9 | Valor de cuotas: ${(monto + (monto*0.15))/9}`
                arrayHistorial.push(transaccion);
                break;
            }
            case 12: {
                console.log(` => Ud. debera pagar 12 cuotas de: $${(monto + (monto*0.2))/12}`);
                let tiempo = new Date()
                let transaccion = `${tiempo.toLocaleTimeString()} => Monto: ${monto} | Cuotas: 12 | Valor de cuotas: ${(monto + (monto*0.2))/12}`
                arrayHistorial.push(transaccion);
                break;
            }
            default: {
                console.log('XXX El valor ingresado no es valido XXX');
                break;
            }
        }

        let respuestaValida = false;
        //bucle while para determinar si finalizar o no operacion de eleccion de cuotas
        while(respuestaValida === false) {
            let respuestaCuotas = prompt(`¿Desea calcular el monto $${monto} en otra cantidad de cuotas? (si/no): `)
            if(respuestaCuotas.toLowerCase() === 'no') {
                ingresarCantCuotas = false;
                respuestaValida = true;
            } else if (respuestaCuotas.toLowerCase() === 'si') {
                respuestaValida = true
            } else {
                console.log('Respuesta invalida, por favor elija "si" o "no"');
            }
        }
    }

    let respuestaMontoValida = false
    //bucle while para determinar si terminar operacion
    while(respuestaMontoValida===false) {
        let respuestaMonto = prompt('¿Desea realizar una nueva operacion? (si/no): ')
        if(respuestaMonto.toLowerCase() === 'no') {
            respuestaMontoValida=true
            ingresarMonto = false
        }   else if (respuestaMonto.toLowerCase() === 'si') {
            respuestaMontoValida=true;
        }  else  {
            console.log('Respuesta invalida, por favor elija "si" o "no"');
        }
    }
}


respuestaHistorialValida = false

while(respuestaHistorialValida === false) {
    let respuestaHistorial = prompt(`¿Desea ver su historial de consultas? (si/no): `)
    if(respuestaHistorial.toLowerCase() === `si`) {
        respuestaHistorialValida = true
        arrayHistorial.map(transaccion => console.log(transaccion))
    }
    else if(respuestaHistorial.toLowerCase() === `no`) {
        respuestaHistorialValida = true
    }
    else {
        console.log('Respuesta invalida, por favor elija "si" o "no"');
    }
}

console.log('========= MUCHAS GRACIAS POR SU CONSULTA =========');