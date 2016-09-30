console.log('Loaded!');

//Change tet of main div 
var element = document.getElementById('main-text');

element.innerHTML = 'new value';

//Move Image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '150px';
}