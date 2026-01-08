import { URL } from "node:url";

const urll = new URL("https://google.com")

urll.host = "www.annas.com"
urll.searchParams.append("search", "halo")

console.info(urll)
console.info(urll.toString())
console.info(urll.host)
console.info(urll.hostname)
console.info(urll.origin)
console.info(urll.searchParams)