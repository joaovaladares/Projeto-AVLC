const teste = require('teste.js')

senha = [[1, 2], [1, 5]]
decode2 = "avlc"
frase = "eu amo avlc"


frase1 = teste.encode(frase, senha)
console.log("Frase cifrada: " + frase1.fraseFinal)
frase2 = teste.decode(frase1.fraseFinal, senha, frase1.espacos)
console.log("Frase decifrada: " + frase2)  