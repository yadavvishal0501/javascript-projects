const display = document.getElementById('display');
const num = document.querySelectorAll('.num')
const buttons = document.querySelectorAll('input[type=button]')


let output= ''




buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (btn.classList[0] == 'num') {
            output += e.target.value;
        } else if (btn.classList[0] == 'operator') {
            output += e.target.value;
        } else if (btn.classList[0] == 'eval') {
            output = eval(output);
        } else if (btn.classList[0] == 'clear') {
            output = '';
        }
        
        display.value = output;
    
});
})

// display.addEventListener('input', (e) => {
//     const int = value;
//     function value(int) {
//         disp
//     }

// })