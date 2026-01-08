import timers from "timers/promises"

// console.info(new Date())
// const value = await timers.setTimeout(1000, "getValue")
// console.info(new Date())
// console.info(value)

// for await (const startTimer of timers.setInterval(1000, new Date())){
//   console.info("Tick:", startTimer) // ini Date sama saja membuat variabel baru = new Date()
// }

for await (const startTimer of timers.setInterval(1000, "ignored")){
    console.info("Tick:", new Date())
}