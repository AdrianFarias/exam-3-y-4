let texto = prompt("escribe un texto");
let conta = 0;
for (let letra of texto.toLowerCase()) {
    if (['a','e','i','o','u'].includes(letra)) conta++;
}
console.log("este es el numero de vocales:" + conta);