var titulo = document.getElementById('saludo');
var box = document.getElementById('caja');
var btn =document.getElementById('botones');


function ccolor() {
    titulo.classList.remove("saludo");
    titulo.classList.add("nuevosaludo");
    
    box.classList.remove("caja");
    box.classList.add("nuevacaja");   
    
}

btn.addEventListener('clicks',ccolor);