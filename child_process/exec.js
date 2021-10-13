const { exec } = require('child_process')
const { stderr } = require('process')

// exec('pwd', (error, stdout, stderr)=>{
//     if (error){
//         console.log(`error : ${error}`)
//         return
//     }
//     if (stderr){
//         console.log(stderr)
//         return
//     }
//     console.log(`stdout : ${stdout}`)
// })

exec('ls -lh', (error, stdout, stderr)=>{
    if (error){
        console.log(`error : ${error.message}`)
        return
    }
    if (stderr){
        console.log(stderr)
        return
    }
    console.log(`stdout : ${stdout}`)
})