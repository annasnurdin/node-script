import util from "util"

console.info(util.format("Nama: %s", "Annas")) // %s untuk string dll, cek dokum

const person = {first: "Annas", last: "Nurdin"}
console.info(util.format("Person: %j", person.first))