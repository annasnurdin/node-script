import net from "net"

const server = net.createServer(function(client){
  console.info("Client connected")

  client.addListener("data", function(data){ // data dari client diterima callback
    console.info("Menerima data dari client: ", data.toString())
    client.write(`data write: ${data.toString()}\r\n`)
  })
})

server.listen(3002, "localhost")