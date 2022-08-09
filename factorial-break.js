resultado = 1;
i = 1;
while (true) {
    resultado = resultado * i;
    i++;
    if (i == 10) {
        break;
    }
}
console.log(`El factorial de 10 es: ${resultado}`);