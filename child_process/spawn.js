const { spawn} = require('child_process')

const child = spawn('ls', ['-lh'])

child.stdout.on('data', (data)=>{
    console.log(`data : ${data}`)
})

child.stderr.on('data', (data)=>{
    console.log(`Error : ${data}`)
})

child.on('error', (error) =>{
    console.log(`Error : ${error}`)
})

child.on('exit', (code, signal)=>{
    if(code){
        console.log(code)
    }
    if(signal){
        console.log(signal)
    }
    console.log("Done ")
})