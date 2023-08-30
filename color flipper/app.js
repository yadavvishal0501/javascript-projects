const colors = ['red', 'blue', 'green', 'rgb(133,122,200)', '#F15025'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');
button.addEventListener('click', function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = colors[randomColor];
    color.innerText = colors[randomColor];
})
function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}