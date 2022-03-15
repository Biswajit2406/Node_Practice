const fs = require('fs');

//fs.readFile('test.txt', 'utf8', (err, data)=>{
//    console.log(err,data);
//})

const a=fs.readFileSync('test.txt')
console.log(a.toString())

fs.writeFile('test.txt', "This is a data", ()=>{
    console.log("Written")
})

console.log("finished Reading File")