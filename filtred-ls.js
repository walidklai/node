const fs = require('fs')
const path = require('path')
const { argv } = require('process')

const fct = (directory, extention) => {
    fs.readdir(directory, (err, list) => {
        if (err) throw err
        let k = list.map(el => path.parse(el))
        .filter(el =>{
            el.ext.substring(1) === extention?
            console.log(el.base):null
        } )  
    })
}
fct(process.argv[2],process.argv[3])
