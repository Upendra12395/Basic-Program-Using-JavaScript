// function fun1(a){
//     let value = 2
//     function fun2(){
//         console.log(value, a)
//     }
//     return fun2
// }

// const res = fun1(5)
// res()
//fun1(6)()



function fun1(a){
    let value = 2
    return function fun2(){
        console.log(value, a)
    }
}

fun1(5)()