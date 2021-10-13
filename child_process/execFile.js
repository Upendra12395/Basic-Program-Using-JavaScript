const { execFile } = require('child_process')

execFile('./practice.exe', (error, stdout, stderr)=>{
    if (error){
        console.log(`Error : ${error.message}`)
        return
    }
    if(stderr){
        console.log(`stderr : ${stderr}`)
        return
    }
    console.log(stdout)
})