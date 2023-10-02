console.log('I');
// these callback methods are used to make javscript programs asynchronus as we know mostly all programming language  including javscript is synchronus
setTimeout(()=>{
    console.log('Love javscript');
},0.3)// default timing to seT timeout is 1000 milisec or 1sec t
console.log('javascript');
/*------------------------*/

// to escape from call back hell means nesting of call backs we can use promises
const doSomething= new Promise((res,rej)=>{
    const result = null;
    if(result){
        res('ok');
    }else{
        rej('not ok');
    }
})
doSomething.then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e)
})

/*--------------------*/
//now to return promise manually without api
const DoSomething=()=>{
    return new Promise((res,rej)=>{
        const result = null;
    if(result){
        res('ok');
    }else{
        rej('not ok');
    }
    })
    
}
/*----------------------------*/
// now with the help of async we will return promise automatically
const getData=()=>{
    return new Promise((res,rej)=>{
        const result = 'abs';
    if(result){
        res('ok');
    }else{
        rej('not ok');
    }
    })
    
}
const DSomething= async()=>{
 const data = await getData();
 console.log(data);
 
    
}

DSomething().then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e)
})