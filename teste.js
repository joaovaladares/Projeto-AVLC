senha = [[1,2],[0,3]]
decode = "avlc"
frase = "i am hiding"
if(frase.length % 2 != 0){
    frase += frase[frase.length-1]
}
pares = frase.replace(/\s/g, "").match(/.{1,2}/g)
console.log(pares)

let numbers = {
    1 : 'a',
    2 : 'b',
    3 : 'c',
    4 : 'd',
    5 : 'e',
    6 : 'f',
    7 : 'g',
    8 : 'h',
    9 : 'i',
    10 : 'j',
    11 : 'k',
    12 : 'l',
    13 : 'm',
    14 : 'n',
    15 : 'o',
    16 : 'p',
    17 : 'q',
    18 : 'r',
    19 : 's',
    20 : 't',
    21 : 'u',
    22 : 'v',
    23 : 'w',
    24 : 'x',
    25 : 'y',
    0 : 'z'
}

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
aux = []
for(let i = 0, j = 0; i < paresOrdenados.length; i++){
    aux.push(paresOrdenados[i][0]*senha[0][0] + paresOrdenados[i][1]*senha[0][1])
    aux.push(paresOrdenados[i][0]*senha[1][0] + paresOrdenados[i][1]*senha[1][1])
    pares2.push(aux)
    aux = []
}
pronto = ""
for(let i = 0; i < pares2.length; i++){
    for(let j = 0; j < pares2[i].length; j++){
        pronto += numbers[pares2[i][j]%26]
    }
}
console.log(pronto)
