const display = document.getElementById('display');
const num = document.querySelectorAll('.num')
const buttons = document.querySelectorAll('input[type=button]')


let output = ''

// using for each as the buttons is an array of buttons 


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // btn.classList because it is an for individual button classes
        if (btn.className == 'num') {
            output += e.target.value;
        } else if (display.value !== '' && btn.classList[0] == 'operator') {
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
document.onkeydown = function (e) {
    // console.log(e);
    switch (e.key) {
        case '+':
            if (display.value !== '') {
                output += '+';
                display.value = output;
            }
            break;
        case '-':
            if (display.value !== '') {
                output += '-';
                display.value = output;
            }

            break;
        case '*':
            if (display.value !== '') {
                output += '*';
                display.value = output;
            }
            break;
        case '/':
            if (display.value !== '') {
                output += '/';
                display.value = output;
            }
            break;
        case '.':
            output += '.';
            display.value = output;

            break;


        case 'Enter':
            output = eval(output);
            display.value = output;

            break;

        case 'Backspace':
            output = parseInt(String(output).split('').slice(0, -1).join(''));
            display.value = output;
            break;

        case 'A':
            output = '';
            display.value = output;

            break;

        default:
            if (e.which > 47 && e.which < 58) {
                output += e.key;
                display.value = output;
            }
    }

}

//