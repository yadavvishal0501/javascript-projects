const button = document.getElementById('btn');
const color = document.querySelector('.color');
button.addEventListener('click', function () {
   
    
    
const randomColor = getRandomColor();
        
    
    document.body.style.backgroundColor = randomColor  ;
    color.innerText = randomColor;
})
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`

}