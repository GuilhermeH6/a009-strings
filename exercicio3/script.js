//Crie a const para a frase aqui

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

console.log(frase)

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const novaFrase = frase.replace("verde", "rosa")
const novaFrase2 = novaFrase.replace("azul", "laranja")
console.log(novaFrase2);

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log("Inclui verde?", novaFrase2.includes("verde"), "Inclui laranja?", novaFrase2.includes("laranja"))

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

