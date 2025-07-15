 // Netflix & Spotify

 // Importação de clientes via CSV (excel)
 // 1gb = 1.000.000
 // POST /upload import.csv

 // 10mb/s - 100s 

 // 100s -> Inserções no banco de dados
 // Sem os Streams seria necessário esperar 100 segundos para o node fazer as inserções no banco de dados. 

 //  10mb/s -> 10.000 => Por que não ir inserindo os registros antes de todo o arquivo ser enviado. 

 // Readables Streams / Writable Streams    

 // Streams -> 

// process.stdin -> Stream de Leitura
// .pipe(process.stdout) -> Stream de Escrita

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    
    _read(){
        const i = this.index++

        setTimeout(() => {
            if ( i > 100){
            this.push(null)
        } else {
            const buf = Buffer.from(String(i)) 

            this.push(buf) 
        }
        }, 100)
    }
}

class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        callback(null,  Buffer.from(String(transformed)))
              // ERRO              CONVERSÃO
    }
}

class MultiplyByTenStream extends  Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

// Com Streams você consegue trabalhar com os dados sem eles estarem completos.

new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())

// Stream De Leitura => só consegue ler dados
// Stream De Escrita => só consegue escrever dados 
// Stream de Transformação => Ler dados de um lugar e Escrever dados para outro lugar