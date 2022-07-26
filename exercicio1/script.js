// # Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
    
// Você deve usar apenas um `console.log()` para isso
const nomeDoUsuario = prompt("qual seu nome?")
const comida1 = prompt("qual sua 1 comida favorita?")
const comida2 = prompt("qual sua 2 comida favorita?")
const comida3 = prompt("qual sua 3 comida favorita?")

resposta = `Estas são as comidas favoritas de ${nomeDoUsuario}:
${comida1}
${comida2}
${comida3}`

console.log(resposta);