const cat = document.getElementById('cat');
const colorBtn = document.getElementById('colorBtn');
const bodyBg = document.getElementById('bodyBg');

function changeColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    bodyBg.style.backgroundColor = color;
}

cat.addEventListener('click', changeColor);
colorBtn.addEventListener('click', changeColor);