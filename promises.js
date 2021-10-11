// const student = [{name:"Arun", age: 21, grade: 'A'},
// {name: "ravi", age:19, grade:"B"},
// {name:'Rohan', age: 20, grade: 'A+'}]

// function setStudent(obj){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             student.push(obj)
//             console.log('student saved successfully')
//             let save = true
//             if(save){
//                 resolve()
//             }else{
//                 reject("not saved")
//             }
//         }, 4000);
//     })
    
// }

// function getStudent(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log('student details :')
//             console.log(student)
//             let print = true
//             if (print){
//                 resolve()
//             }else{
//                 reject("error in getStudent")
//             }
//         }, 2000);
//     })
    
// }

// function success(){
//     setTimeout(()=>{
//         console.log("all operations run successfully")
//     },1000)
// }

// setStudent({name:"Rohan", age:20, grade:'D'})
// .then(getStudent)
// .then(success)
// .catch(error => console.log(error))



/*setTimeout(()=>{
    console.log('Hello 1')
}, 4000)

setTimeout(()=>{
    console.log('Hello 2')
}, 2000)

setTimeout(()=>{
    console.log('Hello 3')
}, 1000)*/

function print1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Hello 1')
            resolve()
        }, 4000);
        
    })
}

function print2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Hello 2')
            resolve()
        }, 2000);
        
    })
}

function print3(){
        setTimeout(() => {
            console.log('Hello 3')
        }, 1000);
}

print1()
.then(print2)
.then(print3)
.catch(error =>console.log(error))