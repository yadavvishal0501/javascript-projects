let array =[1,2,3,4,5,6,7,8,9,10];
//find() return the first element of the array  which is found the condition true.
let h = array.find(x =>{return x>3 && x<7})
//findIndex works similar to find() but only returns the first index of the element found true.
let g = array.findIndex(x =>{return x>3 && x<7})
//Array.includes() is use to check the element is present in array or not  a.includes(element,i) i will check index position of the value in array.

const p= array.includes(3,3);
console.log(p)

//making of simple calculator with switch case 
const operator =prompt('enter a operator(either*,+,-,/): ');
const number1= parseInt(prompt('enter a first number: '));
const number2= parseInt(prompt('enter a second number: '));
let result;
switch(operator){
    case '+':
    result = number1+number2;
    console.log(result);
    break;
    case '-':
      result = number1-number2;
    console.log(result);
    break;
     case '*':
      result = number1*number2;
    console.log(result);
    break;
      case '/':
      result = number1/number2;
    console.log(result);
    break;
    default:
    console.log(operator);
}