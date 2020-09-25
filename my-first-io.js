const fs = require('fs')
let data = fs.readFileSync(process.argv[2])
data = data.toString()
const fct = (data) => {
    data = data.split().map(el => el.match(/\n/g).length)
    data = Number(data)
    console.log(data)
}
fct(data)