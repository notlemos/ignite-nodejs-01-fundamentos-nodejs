import http from 'node:http'
import { Transform } from 'node:stream'
import { buffer } from 'node:stream/consumers'


class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1
        
        console.log(transformed)

        callback(null,  Buffer.from(String(transformed)))
              // ERRO              CONVERSÃO
    }
}

// Tudo no NODE é STREAM -> TODA porta de entrada e saida no NODE é STREAM.
// req e res são streams

// req -> Readable Stream
// res -> Writable Stream

const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunk of req ) {
        buffers.push(chunk)
    }

    const fullStringContent = Buffer.concat(buffers).toString()

    console.log(fullStringContent)

    return res.end(fullStringContent)
})
 
server.listen(3334)