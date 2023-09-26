
//break statment stops the execution of the loop at the given condition inside the loop is true it makes the loop to stop immediately 


let count = 0;
let number = parseInt(prompt('Enter a number :'))

do {
    count++;
    //adding break statment to print number upto 5 
    if(count==6){break;}//
    const product = number * count;
        console.log(`${number}*${count} = ${product}`);
    
} while (count <= 10)



// now talking about the continue statement it only skips the current iteration specify the condition in the loop and start with next iteration 
