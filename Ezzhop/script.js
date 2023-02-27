const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const e = document.getElementById('blur');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        e.classList.add('ac');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        e.classList.remove('ac');
    })
}
var mainImg = document.getElementById("mainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    mainImg.src=smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainImg.src=smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainImg.src=smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainImg.src=smallimg[3].src;
}