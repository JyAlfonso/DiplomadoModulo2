function fun(){
    console.log(" C is fun")
    console.log("Python is cool")
    console.log("Javascript is amazing")
}

function fun1(arg){
    if (arg === undefined)
        console.log("no argumento")
    else 
        console.log("argumento encontrado")        
}

function fun2(arg){

    if (arg === undefined)
        console.log("no argumento")
    else 
        console.log(arg)        
}

function fun3(arg,arg1){
    console.log(arg +" is "+ arg1 )          
}

function fun4(arg){
    if (typeof(arg) === 'number')
        console.log("mi numero es: " + arg )
    else 
        console.log("No es un numero")          
}



