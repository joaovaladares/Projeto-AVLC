senha = [[1,2],[0,3]]
decode = "avlc"
frase = "i am hiding"
if(frase.length % 2 != 0){
    frase += frase[frase.length-1]
}
pares = frase.replace(/\s/g, "").match(/.{1,2}/g)
console.log(pares)
let result = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 0
}
paresOrdenados = []
aux = []
for(let i = 0; i < pares.length; i++){
    for(let j = 0; j < pares[i].length; j++){
        aux.push(result[pares[i][j]])
    }
    paresOrdenados.push(aux)
    aux = []
}

pares2 = []
for(let i = 0, j = 0; i < paresOrdenados.length; i++){
    soma = 0
    for(let j = 0; j < paresOrdenados[i].length; j++){
        soma += senha[i][i] * paresOrdenados[j][0]
    }
    console.log(soma)
}