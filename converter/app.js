const form = document.getElementById('form');
const enterValue = document.querySelector('#input')
const Input = document.querySelector('#fromThis')
const output = document.querySelector('#toThis')
const button = document.querySelector('button')
const from = document.querySelector('#from');
const To = document.querySelector('#to');
const label1 = document.querySelector('.ft');
const label2= document.querySelector('.tt');



enterValue.addEventListener('change', () => {
    // e.preventDefault();
    // Input.value = enterValue.value;
})

function convert(from, to) {
    if (from.value == 'celcius' && to.value == 'fahrenheit') {
        output.value = (parseInt(Input.value) * 9 / 5) + 32;
        label1.innerText = '\u00B0C' ;
        label2.innerText = '\u00B0F';
    } else if (from.value == 'fahrenheit' && to.value == 'celcius') {
        output.value = (parseInt(Input.value) - 32) * (5 / 9);
        label1.innerText = '\u00B0F'
        label2.innerText = '\u00B0C'
        
    } else if (from.value === to.value) {
        output.value = Input.value;
        if (from.value == 'fahrenheit') {
            label1.innerText = '\u00B0F'
        label2.innerText = '\u00B0F'
        } else {
            label1.innerText = '\u00B0C'
        label2.innerText = '\u00B0C'
        }
    }


}

button.addEventListener('click', (e) => {
    e.preventDefault();
    Input.value = enterValue.value;
    convert(from, To);
    enterValue.value = '';

})


