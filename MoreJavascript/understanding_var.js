if(true){
    var name = 'vishal'//var is scoped globally; const and let are blocked scoped
    
}
console.log(name);// 'vishal'

function foo(lastName){
    var second = lastName;
    return second
}

foo('yadav')
console.log(name);//'vishal'
console.log(foo('yadav'))//'yadav'
/*-----------------------*/

   
function Say(name){
    var data ;
    if(true){
       data = name;//let will be give same output value.
    }
        console.log(data);
}
Say('vishal')
function Say2(name){
    
    if(true){
    let  data = name;//let will be give same value.
    }
        return data;//for let and const not defined sa because of function scoped.
}
console.log(Say2('vishal'))//for var only 'vishal';

function Say3(name){
    
    if(true){
    const  data = name;//const is block scoped
    }
        console.log(data);
}
Say3('vishal')// not defined

// note one thing if the variable we are declaring for example let used  if for loop (let i=0;) so we want to use i=0 only for that loop case only not any outside function or variable declaration the drawback of using var is that var is not blocked scope and the value of i will be declared outside for loop.




/*-talk about destructuring with object here a simple example-*/
const chickens ={
    name: 'donald chicken',
    color:'reddish brown',
    discreption:'egg came first or chicken'
}

const {name:N,color,discreption:D}=chickens;
function chicken({N,color,D}){
    return `His name is '${N}' with color '${color}' and he always ask one question to everybody '${D}' `;
}

console.log(chicken({ N, color, D }))// will return
//His name is 'donald chicken' with color 'reddish brown' and he always ask one question to everybody 'egg came first or chicken' 