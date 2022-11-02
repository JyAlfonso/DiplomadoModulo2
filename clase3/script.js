function fun(arg){
    console.log(arg)
    if (typeof arg === 'number')
        for (let i = 0; i < arg; i++){
            console.log('C is fun')
        }  
    else    
        console.log('Missing number of ocurrences')        
}


function fun2(){
    console.log('Hola Mundo')
}
fun(5)
fun2()