import https from "https"

const endpoint = "https://jsonplaceholder.typicode.com/users"
const request = https.request(endpoint, {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "accept": "application/json"
  }
}, (response) => {
  response.addListener("data", (data) => {
    console.info("Data diterima: ", data.toString())
  })
})

const body = JSON.stringify({
  nama: "Annas"
})
request.write(body)
request.end()