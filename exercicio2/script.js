const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)




// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;
console.log(minhaString.trim())

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log('quantidade de caracteres antes e depois:', minhaString.length, minhaString.trim().length)

// c) Substitua os traços `________` por “sticioso”.

console.log(minhaString.replace("________", "sticioso"))