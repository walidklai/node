const { argv } = require("process");

const fct=(argv)=>{
    let sum=0
    for(let i=2;i<argv.length;i++)
    {
        sum=Number(sum)+Number(argv[i])
    }
    console.log(sum)
}
fct(argv)