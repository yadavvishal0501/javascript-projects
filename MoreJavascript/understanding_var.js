// var is only function-scoped not blocked scoped where as const and let are function-scoped and blocked-scoped;



if (true) {
    
    var Name = 'vishal'//as it is not blocled scoped
    
}
console.log(Name);// 'vishal'

function foo(lastName){
    var second = lastName;
    return second
}

foo('yadav')
console.log(name);//'vishal'
console.log(foo('yadav'))//'yadav'
/*-----------------------*/

   
function Say(name){
    var data ;//declaring
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
        return data;//for let and const return undefined as because of blocked scoped.
}
console.log(Say2('vishal'))// undefined;
//but by declaring data with var the function will return 'vishal'

function Say3(name){
    
    if(true){
    const  data = name;//const is block scoped
    }
        console.log(data);
}
Say3('vishal')// not defined

// note one thing if the variable we are declaring for example let used  if for loop (let i=0;) so we want to use i=0 only for that loop case only not any outside function or variable declaration the drawback of using var is that var is not blocked scope and the value of i will be declared outside for loop.

// test this in interpreter for better undertanding 
var A = 12
var A = 23
console.log(A)// ouptut is 23;
// but for let 
let B = 19;
// let B = 23;
console.log(B)//let cannot be redeclared output indentifer B is already been declared.



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