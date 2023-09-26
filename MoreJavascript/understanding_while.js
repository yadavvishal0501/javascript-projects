let arr = ['one','two','three'];
let i=0;
//while loop will iterate until condition becomes false 
// in while loop and for loop is(when while loop becomes false it stop iteration 
while(i<arr.length){
    console.log(arr[i]);
    console.log(i);
    i++
}



// ------------------------------
// building a program to sum positive integer only using while loop
let sum = 0// because sum will change

//make a variable which store user input
let input = parseInt(prompt('Enter a number: '));
// so we want only positive number

while(input>=0){
    sum+=input;
    // add again if the input is positive
    input =  parseInt(prompt('Enter a number: '));
}
//display the sum 
console.log(`the sum is ${sum}`)

/*(-------------------------------------)*/
// same thing with do while but i think do while is simple

do {
    sum += input;
    input = parseInt(prompt('Enter a number: '));
} while (input >= 0);


// when to use while loop or for loop the condition is when no of iteration is fixed use for loop and when iteration is not fixed use while loops;


// dowhile loop for geneating table upto iteration

let count = 0;
let number = parseInt(prompt('Enter a number :'))

do {
    const product = number * count;
    count++;
    console.log(`${number}*${count} = ${product}`);
}while(count<=10)