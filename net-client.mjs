import net from "net"

const connection = net.createConnection({port:3002, host:"localhost"})

setInterval(() => {
  connection.write("Annas\r\n") // ini yang dikirim
}, 1000);

connection.addListener("data", (data) => {
  console.info("Data diterima: ", data.toString())
})