import http from "http"

const server = http.createServer((req, res) => {
  // console.info(req, "req")
  console.info(req.method)
  console.info(req.url)
  console.info(req.headers)
  console.info(req.statusCode)

  res.write("Hellow") // yang ditampilkan ke client
  res.end()
})

server.listen(3000)