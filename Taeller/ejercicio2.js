//Ejercicio 2.2
function fun(){
    const myVar='JavaScript is amazing'
    console.log(myVar)
}


//Ejercicio 2.3
function fun1(){
    console.log("C is fun")
    console.log("Python is coll")
    console.log("JavaScript is amazing")
}


//Ejercicio 2.4

function fun2(arg){
    
    if (typeof arg === 'string'){
        const words=arg.split(' ')
        const cont=words.length

        if(cont==1)
            console.log('Argument found')
        else
            console.log('Arguments found')
    }
    else
        console.log('Argument no found')
}    


//Ejercicio 2.5

function fun3(arg,arg1){
    console.log(arg + " is " + arg1)
}


//Ejercicio 2.6
function fun4(){
    const myVar=["C is fun","Python is coll", "JavaScript is amazing"]
    
    for (const y of myVar){
        console.log(y)
    }    
}

//Ejercicio 2.7
function fun5(arg1){
    
    if ((arg1 === undefined) )
        console.log("Missing number of ocurrences")

    else 
        
        for (let  i = 1; i <= arg1; i++) {
            console.log("C is fun")
        }    
}


//Ejercicio 2.8
function fun6(arg1, arg2='X'){
    
    if ((arg1 === undefined) || typeof(arg1) === 'string' )
        console.log("MISSING SIZE")

    else 
        
        for (let  i = 1; i <= arg1; i++) {
            console.log(arg2.repeat(arg1))
            for (let j = 1; j <= arg2; j++) {
            }
        }    
}
//fun6()
//fun6("HOLA")
fun6(8)