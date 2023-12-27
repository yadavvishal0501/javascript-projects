const colors = ['red', 'blue', 'green', 'rgb(133,122,200)', '#F15025'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.querySelector('.color');
const Simple = document.querySelector('.simpleBtn');
const Hex = document.querySelector('.hexBtn');
const rgb = document.querySelector('.rgbBtn');
const li1 = document.querySelector('.simple');
const li2 = document.querySelector('.hex');
const li3 = document.querySelector('.rgb');




 Simple.onclick = function () {
    const randomColor = getRandomColor(colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    color.innerText = colors[randomColor];
};
function getRandomColor(length) {
    return Math.floor(Math.random() * length);
}

Hex.addEventListener('click' ,function () {

    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomColor = getRandomColor(hex.length);
        hexColor += hex[randomColor];
    }
    document.body.style.backgroundColor = hexColor;
    color.innerText = hexColor
})


rgb.addEventListener('click', function () {



    const randomColor = geTrgbRandomColor();


    document.body.style.backgroundColor = randomColor;
    color.innerText = randomColor;
})
function geTrgbRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`

}

//to remove display none{



li2.addEventListener('click', function (e) {
    myFunction(Hex, rgb, Simple);
});

li1.addEventListener('click', function (e) {
myFunction(Simple, Hex, rgb);
});

li3.addEventListener('click', function (e) {
  myFunction(rgb, Simple, Hex);
});
function myFunction(tag1,tag2,tag3,k){
    document.body.style.backgroundColor = '#ffffff';
    tag3.style.display = 'none';
    tag2.style.display = 'none';
    tag1.style.display = 'block';
    tag1.innerHTML = tag1.className.slice(0, tag1.className.indexOf('B')).toUpperCase();
};

