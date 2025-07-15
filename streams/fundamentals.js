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

// process.stdin
// .pipe(process.stdout)

import { Readable } from 'node:stream'

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

// Com Streams você consegue trabalhar com os dados sem eles estarem completos.

new OneToHundredStream()
    .pipe(process.stdout)