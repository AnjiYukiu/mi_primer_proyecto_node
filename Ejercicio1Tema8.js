// Función sin parámetros que devuelva siempre "true"
function True() {
    return true;
}

// Función asíncrona que use setTimeOut y pase un mensaje por consola 5 s después de ejecutarse
function asinc() {
    console.log("Hola, soy una promesa")
}

const promesa = new Promise((resolve,reject) => {
    if (true) {
        resolve()
    }else{
        reject()
    }
})

promesa
    .then(setTimeout(asinc,5000))

// Función generadora de índices automágicos
function* generaIndice() {
    let id = 0;
    while (true) {
        id ++;
        yield id;
    }
}

const genId = generaIndice()
