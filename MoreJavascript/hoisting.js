//WHAT IS HOISTING?
//
//ANS- Hoisting is the concept that enables us to extract values of variables and function even before intializing value without getting errors and this happens during the 1st phase (memory creatioin phase) of the execution context.

//hoisting is the default behaviour of moving all the declarations at top of the scope before code execution .basically , it give us advantage that no matter where the function and variables are declared ,thet are moved to top of their scope regardless of whatever thier scope is global or local.
//it allows to  call the function before even writing them in our code.
//NOTE- javascript can only hoist declaration not intialization .
//see the variable life-cycle 
let a;// Declaration
a = 12  // assingment
console.log(a)//usage
 
//however since javascript allows us to both declare and intalize variables simultaneously ,so we can intialize them

let A = 100;
//now let see an example of hoisting of variable
function Hoist() {
    b = 34;
    let c = 12;
}
console.log(b)//34
console.log(c) //undefined it is function scope

//another example

console.log(Name);//undefined
let Name = 'hhh'
//for the aboove code we get undefined not reference error means the interpreter has hoist the declaration above the scope before intialization

//Now hoisting for the function scope 
codeHoist();// calling before declaration

function codeHoist() {// declaring
    console.log('i have been hoisted');

}
//we will get output 'i have been hoisted';

//Note this will work for regular function not function defined as expression means arrow functions. es6 we will get type error