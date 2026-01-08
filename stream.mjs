import fs from "fs"

const writer = fs.createWriteStream("target.log") //dia akan timpa filenya
writer.write("Annas\n")
writer.write("Nurdin")
writer.end()

const render = fs.createReadStream("target.log")
render.on("data", function(data){
  console.info(data.toString()) //datanya buffer
  render.close
})