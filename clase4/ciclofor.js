fun(2,'x')

function fun(arg1, arg2='X'){
    
    if ((arg1 === undefined) || typeof(arg1) === 'string' )
        console.log("MISSING SIZE")

    else 
        
        for (let  i = 1; i <= arg1; i++) {
            console.log(arg2.repeat(arg1))
            for (let j = 1; j <= arg1; j++) {
            }
        }    
}

