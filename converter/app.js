const form = document.getElementById('form');
const enterValue = document.querySelector('#input')
const Input = document.querySelector('#fromThis')
const output = document.querySelector('#toThis')
const button = document.querySelector('button')
const from = document.querySelector('#from');
const To = document.querySelector('#to');
const label1 = document.querySelector('.ft');
const label2 = document.querySelector('.tt');

const select = document.getElementById('unit')



enterValue.addEventListener('change', () => {
    // e.preventDefault();
    // Input.value = enterValue.value;
})
//this is for temperature
function convert(from, to) {
    if (from.value == 'celcius' && to.value == 'fahrenheit') {
        output.value = (parseInt(Input.value) * 9 / 5) + 32;
        label1.innerText = '\u00B0C';
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
// this is for length.
function convertLength(length, f, t) {
    switch (f.value) {
        case 'mile':
            label1.innerText = 'ml'
            switch (t.value) {
                case 'mile':
                    label2.innerText = 'ml';
                    output.value = length;

                    break;
                case 'yard':

                    output.value = length * 1760;
                    label2.innerText = 'yd';
                    break;
                case 'foot':
                    label2.innerText = 'ft'
                    output.value = length * 5280;
                    break;
                case 'milli':
                    label2.innerText = 'mi'
                    output.value = length * 1.609e+6;
                    break;
                case 'cent':
                    label2.innerText = 'cm'
                    output.value = length * 160900;
                    break;
                case 'meter':
                    label2.innerText = 'm'
                    output.value = length * 1609;
                    break;
                case 'kilometer':
                    label2.innerText = 'km'
                    output.value = length * 1.609;

            }
            break;
        case 'foot':
            label1.innerText = 'ft'
            switch (t.value) {
                case 'foot':
                    label2.innerText = 'ft'
                    output.value = length;
                    break;
                case 'mile':
                    label2.innerText = 'ml';
                    output.value = length / 5280;
                    break;
                case 'yard':
                    label2.innerText = 'yd';
                    output.value = length / 3;
                    break;
                case 'milli':
                    label2.innerText = 'mi';
                    output.value = length * 304.8;
                    break;
                case 'cent':
                    label2.innerText = 'cm';
                    output.value = length * 30.48;
                    break;
                case 'meter':
                    label2.innerText = 'm';
                    output.value = length / 3.281;
                    break;
                case 'kilometer':
                    label2.innerText = 'km';
                    output.value = length / 3281;
            }
            break;
        case 'yard':
            label1.innerText = 'yd'
            switch (t.value) {
                case 'foot':
                    label2.innerText = 'ft';
                    output.value = length * 3;
                    break;
                case 'mile':
                    label2.innerText = 'ml';
                    output.value = length / 1760;
                    break;
                case 'yard':
                    label2.innerText = 'yd';
                    output.value = length;
                    break;
                case 'milli':
                    label2.innerText = 'mi';
                    output.value = length * 914.4;
                    break;
                case 'cent':
                    label2.innerText = 'cm';
                    output.value = length * 91.44;
                    break;
                case 'meter':
                    label2.innerText = 'm';
                    output.value = length / 1.09;
                    break;
                case 'kilometer':
                    label2.innerText = 'km';
                    output.value = length / 1094;
            }
            break;
        case 'milli':
            label1.innerText = 'mi';
            switch (t.value) {
                case 'foot':
                    label2.innerText = 'ft';
                    output.value = length / 304.8;
                    break;
                case 'mile':
                    label2.innerText = 'ml';
                    output.value = length / 1.609e+6;
                    break;
                case 'yard':
                    label2.innerText = 'yd';
                    output.value = length / 914.4;
                    break;
                case 'milli':
                    label2.innerText = 'mi';
                    output.value = length;
                    break;
                case 'cent':
                    label2.innerText = 'cm';
                    output.value = length / 10;
                    break;
                case 'meter':
                    label2.innerText = 'm';
                    output.value = length / 1000;
                    break;
                case 'kilometer':
                    label2.innerText = 'km';
                    output.value = length / 1000000;
            }
            break;
        case 'cent':
            label1.innerText = 'cm';
            switch (t.value) {
                case 'foot':
                    label2.innerText = 'ft';
                    output.value = length / 30.48;
                    break;
                case 'mile':
                    label2.innerText = 'ml';
                    output.value = length / 160900;
                    break;
                case 'yard':
                    label2.innerText = 'yd';
                    output.value = length / 91.44;
                    break;
                case 'milli':
                    label2.innerText = 'm';
                    output.value = length * 10;
                    break;
                case 'cent':
                    label2.innerText = 'cm';
                    output.value = length;
                    break;
                case 'meter':
                    label2.innerText = 'm';
                    output.value = length / 100;
                    break;
                case 'kilometer':
                    label2.innerText = 'km';
                    output.value = length / 100000;
            }
            break;
        case 'meter':
            label1.innerText = 'm';
            switch (t.value) {
                case 'foot':
                    label2.innerText = 'ft';
                    output.value = length * 3.2;
                    break;
                case 'mile':
                    label2.innerText = 'ml';
                    output.value = length / 1609;
                    break;
                case 'yard':
                    label2.innerText = 'yd';
                    output.value = length * 1.09;
                    break;
                case 'milli':
                    label2.innerText = 'mi';
                    output.value = length * 1000;
                    break;
                case 'cent':
                    label2.innerText = 'cm';
                    output.value = length * 100;
                    break;
                case 'meter':
                    label2.innerText = 'm';
                    output.value = length;
                    break;
                case 'kilometer':
                    label2.innerText = 'km';
                    output.value = length/1000;
            }
            break;
        case 'kilometer':
            label1.innerText = 'km'
            switch (t.value) {
                case 'mile':
                    label2.innerText = 'ml';
                    output.value = length / 1.609;
                    break;
                case 'yard':
                    label2.innerText = 'yd';
                    output.value = length * 1094;
                    break;
                case 'foot':
                    label2.innerText = 'ft';
                    output.value = length * 3281;
                    break;
                case 'milli':
                    label2.innerText = 'mi';
                    output.value = length * 1e+4;
                    break;
                case 'cent':
                    label2.innerText = 'cm';
                    output.value = length * 100000;
                    break;
                case 'meter':
                    label2.innerText = 'm';
                    output.value = length * 1000;
                    break;
                case 'kilometer':
                    label2.innerText = 'km';
                    output.value = length;

            }


    }



}
if (select.value == 'index.html') {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        Input.value = enterValue.value;
        convert(from, To);
        enterValue.value = '';

    })
} else {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        Input.value = enterValue.value;
        convertLength(Input.value, from, To);
        // enterValue.value = '';

    })
}


