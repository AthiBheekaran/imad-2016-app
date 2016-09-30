console.log('Loaded!');

//Change tet of main div 
var element = document.getElementById('main-text');

element.innerHTML = 'new value';

//Move Image
var img = document.getElementById('img');
img.onclick = function () {
    img.style.marginleft = '100px';
}