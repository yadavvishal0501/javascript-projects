// another method to create javascript object
const car={
    model:this.model,
    price:this.price
}

const car1 = Object.create(car);//Object.create syntax

car1.model= 'ferrari';
car1.price= '5 crore';

console.log(car1.model);
/* -------------------------------------------- */

//another method is to create constructor class and build it with new keyword

function Car(model,color){// constructor class should be capital
    this.model=model,
    this.color=color
  
};
const car2 = new Car('Suv', 'navyBlue');

console.log(car2.color)//navyBlue;
car2.color = 'black';
console.log(car2.color)//black;
/****************************************************/
//object is just the refrence to the value , the value can be changed. by reassingning the value to it but it is little bit different for primitive variables .
//in primitive variables the orignal value cannot be changed .

let a = 22;
let b = a;
b = 23;
console.log(a)//22
//another example

const person = {
    age: 32
}

const vishal = person;
vishal.age = 22;
console.log(person.age)//age 22;

/*------------------------------------------------                                            */
const brad = {
    age: 32,
    'his family members':4
}

// toacees the value of the label or key we use to mehod one is dot notation and other is square brackets like array

console.log(brad.age);
//console.log(brad.'his family member');//error unexpexted string;
console.log(brad['his family members']);

console.log(brad['age']);
//tbhe key in second method uses quotes around it and gernally to acces like this use when there is an invalid variable name which incldes spaces,hypens,numbers  and other special characters.
/* --------------------------------------------- */

//javascript object methods function defined insde object are methods
//we can use instance of object using this keyword inside the function 
// but the this keyword will only work in regular function not es6 feature arrow function because arrow function are not bound to object.

const vechicle={
    model:'wagnor',
    price:'7lakh',
    discreption: function(){
        console.log(`The current model name:${this.model} is of price:${this.price}`)
    }
};
console.log(vechicle.discreption());
/* -------------------------------------------- */
//javascript classes are way to define common pattern for multiple oblects like shell for everything mold inside

class Vechile{
    model//cannot assign value for class because class is template for molding all objects or it is a knife which will cut every cookie;
    
    
};

const vechile1 = new Vechile()
vechile1.model = 'wagnor'
console.log(vechile1.model);
//now more useful method constructor() which use to intialize class properties when use to create new object instance // instance means missal .example
class Greeting {
    static genericHello(){
        return 'Hello everybody';
    }
    constructor(name){
        this.name=name
    }
    hello(){
        console.log(`Hello ${this.name}`);
    }
}
console.log(Greeting.genericHello())
// static keyword   allow to make method for class not for new object instance;
const greeting1 = new Greeting('vishal');
console.log(greeting1);

/*----------------------------------------------*/
//A class can extend another class and object initalized using that class inherit all method of both class
//in example of inheritance to biology means inheritance to genees from parent to child
class Person{
    constructor(name){
        this.name=name
    }
    hello(){
        return `hello , i am a ${this.name}`;
    }
};


class Programmer extends Person{
    constructor(name,job){
        super(name)
        this.job= job
        
    }
        
       
    
    intro(){
        return `hello i am ${this.name} my profession is ${this.job}`
    }
}

const person1= new Programmer('vishal','web developer')
console.log(person1)
console.log(person1.name)
console.log(person1.intro())


/* object famous property methods to iterate over object */

//for in loop and object.keys() 
const CAR={
    model :'lAMBO',
    color:'bold black',
    year:1990,

};

for (let i in CAR) {
    //Object.hasOwn() use to exclude properties from prototype chain and include only own properties
    if (Object.hasOwn(CAR, i)) {
        console.log(i);
    }
}


// another method is  Object.keys(obj) which make an array of keys in the object after that we can use any array method to iterate over it. 
Object.keys(CAR).forEach((i) => {
    console.log(i);
})


