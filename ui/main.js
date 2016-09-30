console.log('Loaded!');

//Change tet of main div 
var element = document.getElementById('main-text');

element.innerHTML = 'new value';

//Move Image
var marginLeft = 0;
var img = document.getElementById('madi');
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
}