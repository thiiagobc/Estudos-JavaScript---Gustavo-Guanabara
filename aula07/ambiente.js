let num = [5, 8, 2, 9, 3]
num.push(1) // O comando PUSH cria o elemento determinado no final
num.sort() // O comando SORT coloca em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
console.log(`O valor 8 está na posição ${pos}`)
if (pos == -1) {
    console.log('O valor não foi encontrado!')

} else {
    console.log(`O valor está na posição ${pos}`)
}