const teste = require('teste.js')

senha = [[1, 3], [0, 3]]
decode2 = "avlc"
frase = "Testando frase"


frase1 = teste.encode(frase, senha)
console.log(frase1)
frase2 = teste.decode(frase1, senha)
console.log(frase2)

aaaaa = teste.cifraCesar('guilherme', 1)
console.log(aaaaa)
aaaaa = teste.cifraCesar('hvjmifsnf', -1)
console.log(aaaaa)