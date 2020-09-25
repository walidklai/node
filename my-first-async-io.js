const fs=require('fs')
fs.readFile(process.argv[2],'utf8',function(err,data){
    if(err) throw err
    let newLines=data.split().map(el=>el.match(/\n/g).length)
    newLines=Number(newLines)
    console.log(newLines)
})