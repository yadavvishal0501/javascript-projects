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