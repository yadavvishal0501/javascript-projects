const display = document.getElementById('display');
const num = document.querySelectorAll('.num')
const buttons = document.querySelectorAll('input[type=button]')


let output= ''

// using for each as the buttons is an array of buttons 


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // btn.classList because it is an for individual button classes
        if (btn.classList[0] == 'num') {
            output += e.target.value;
        } else if (btn.classList[0] == 'operator') {
            output += e.target.value;
        } else if (btn.classList[0] == 'eval') {
            // eval() to evaluate total
            output = eval(output);
        } else if (btn.classList[0] == 'clear') {
            output = '';
        }
        
        display.value = output;
    
});
})

//