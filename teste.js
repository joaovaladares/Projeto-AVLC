senha = [[1,0],[0,1]]
det = senha[0][0] * senha[1][1] - (senha[0][1]*senha[1][0])
decode = "avlc"
whitespace = []
frase = "abcdefghijklmnopqrstuvwxyz"
frase = frase.toLowerCase()
for(i = 0; i<frase.length; i++){
    if(frase[i]==" "){
        whitespace.push(i)
    }
}
frase = frase.replace(/\s/g, "")
if(frase.length % 2 != 0){
    frase += frase[frase.length-1]
}
pares = frase.match(/.{1,2}/g)
//console.log(pares)

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
console.log("Encriptado: " + pronto)

matrizInversa = []
aux = []
aux.push(senha[1][1])
aux.push(senha[0][1]*(-1))
matrizInversa.push(aux)
aux = []
aux.push(senha[1][0]*(-1))
aux.push(senha[0][0])

matrizInversa.push(aux)
let inverso
achou = false
for(let i = 1; i < 26 && !achou; i++){
    if((i * det)%26 == 1){
        inverso = i
        achou = true
    }
}
console.log(inverso)

for(let i = 0; i < matrizInversa.length; i++){
    for(let j = 0; j < matrizInversa[i].length; j++){
        matrizInversa[i][j] *= inverso
        matrizInversa[i][j] = matrizInversa[i][j]%26
        if(matrizInversa[i][j]<0){
            matrizInversa[i][j] += 26
        }
    }
}

teste = [[0,0],[0,0]]
for(let i = 0; i < matrizInversa.length; i++){
    for(let j = 0; j < matrizInversa.length; j++){
        soma = 0
        for(let k = 0; k < matrizInversa.length; k++){
            produto = senha[i][k] * matrizInversa[k][j]
            soma += produto
        }
        teste[i][j] = soma
    }

}
paresOrdenados = pronto.match(/.{1,2}/g)
pares = []
aux = []
for(let i = 0; i < paresOrdenados.length; i++){
    for(let j = 0; j < paresOrdenados[i].length; j++){
        aux.push(result[paresOrdenados[i][j]])
    }
    pares.push(aux)
    aux = []
}


pares2 = []
aux = []
for(let i = 0, j = 0; i < pares.length; i++){
    aux.push(pares[i][0]*matrizInversa[0][0] + pares[i][1]*matrizInversa[0][1])
    aux.push(pares[i][0]*matrizInversa[1][0] + pares[i][1]*matrizInversa[1][1])
    pares2.push(aux)
    aux = []
}

pronto = ""
for(let i = 0; i < pares2.length; i++){
    for(let j = 0; j < pares2[i].length; j++){
        pronto += numbers[pares2[i][j]%26]
    }
}

if(pronto[pronto.length-1] == pronto[pronto.length-2]){
    pronto = pronto.slice(0,pronto.length-1)
}
for(i = 0; i < whitespace.length; i++){
    pronto = pronto.substring(0,whitespace[i]) + " " + pronto.substring(whitespace[i], pronto.length)
}
console.log(pronto)