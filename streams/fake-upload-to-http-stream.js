import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    
    _read(){
        const i = this.index++

        setTimeout(() => {
            if ( i > 5){
            this.push(null)
        } else {
            const buf = Buffer.from(String(i)) 

            this.push(buf) 
        }
        }, 1000)
    }
}

fetch('http://localhost:3334', {
    method: 'POST', // Pois vai simular um envio, e como vai enviar é o método POST/PUT.
    body: new OneToHundredStream(),
    duplex: 'half' // Obrigatorio
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data)
})

// Abriu uma conexão com o back-end e está enviando dados aos poucos para o server HTTP sem fechar. 
