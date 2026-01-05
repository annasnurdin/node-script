import readline from "readline"
import process from "process"

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

input.question("Masukkan nama\n", (nama) => {
  console.info(`Halo ${nama}`)
  input.question("masukkan umur \n", (umur) => {
    console.info("Umur kamu:", umur)
    input.close()
  })
} )