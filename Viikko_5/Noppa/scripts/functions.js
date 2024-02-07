var dice = document.getElementById('dice');

dice.addEventListener('click', () => {
    var nmbr = Math.floor(Math.random() * 6) + 1;
    var img_path = './images/'+nmbr +'.png';
    var img = dice.querySelector('img');
    img.src = img_path;
});