if(true){
    var name = 'vishal'//var is scoped globally;
    
}

function foo(lastName){
    var second = lastName;
    return second
}

foo('yadav')
console.log(name);
console.log(foo('yadav'))
/*-----------------------*/

   
function Say(name){
    var data ;
    if(true){
       data = name;//with var is not block scopesd it is function scoped
    }
        console.log(data);
}
Say('vishal')
function Say2(name){
    
    if(true){
    let  data = name;//let is block scoped
    }
        console.log(data);
}
Say2('vishal')

function Say3(name){
    
    if(true){
    const  data = name;//const is block scoped
    }
        console.log(data);
}
Say3('vishal')
// console.log(data)