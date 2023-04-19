const btnencriptar = document.querySelector('#btnencriptar');
const btndesencriptar = document.querySelector('#btndesencriptar');
const btnCopiar = document.querySelector('#btnCopiar');
const txt_texto = document.querySelector('#txt_texto');
const txt_texto_r = document.getElementById('txt_texto_r');
let div_texto_r = document.querySelector('#resp');

const letter = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const letterInvert = {
    "enter": "e",
    "imes":  "i",
    "ai":    "a",
    "ober":  "o",
    "ufat":  "u"
}

btnencriptar.addEventListener('click', function(){
    var text = txt_texto.value;
    img_fondo(text);
    txt_texto_r.textContent = encriptar(text);
});

btndesencriptar.addEventListener('click', function(){
    var text = txt_texto.value;
    img_fondo(text);
    txt_texto_r.textContent = desencriptar(text);
});

btnCopiar.addEventListener('click', function() {
    var contenido = txt_texto_r.textContent; 
    navigator.clipboard.writeText(contenido) 
    .then(function() {})
    .catch(function(error) {});
  });

function encriptar(text){
    let textoEncriptado = text.split("");
    let size = textoEncriptado.length;
    
    for(let i = 0; i<size; i++){
        Object.keys(letter).map(function(key){
            textoEncriptado[i] = textoEncriptado[i].replace(key, letter[key]);
        });
    }
    
    return textoEncriptado.join("");
}

function desencriptar(text){
    let textoEncriptado = text;
    let size = textoEncriptado.split(" ").length;
    let i = 0;

    for(let j = 0; j<size;j++){
        i = 0;
        while (i < Object.keys(letterInvert).length) {
            const llave = Object.keys(letterInvert)[i];
            if (llave in letterInvert) {
                if (textoEncriptado.includes(llave)) {
                    Object.keys(letterInvert).map(function(key){
                        textoEncriptado = textoEncriptado.replace(key, letterInvert[key]);
                    });
                } 
            }
            i++;
            }
    }

    return textoEncriptado;
}

function img_fondo(text){
    if(text === ""){
        div_texto_r.style.backgroundImage="url('img/Muñeco.png')"; 
    }else{
        div_texto_r.style.backgroundImage='none';
    }
}