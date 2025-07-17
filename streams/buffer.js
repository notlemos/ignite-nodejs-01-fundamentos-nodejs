// Representação de um espaço na memória do computador, usado para transitar dados de uma maneira rápida.
// Guarda na memória de uma maneira binária. E isso deixa extremamente rápido. 

// Buffer é uma maneira mais eficiente e mais performatica para ler e escrever da memória conversando de uma maneira binária, em baixo nivel.

const buf = Buffer.from("ok")

console.log(buf.toJSON())

// Saida -> <Buffer 6f 6b> 6f = o, 6b = k   