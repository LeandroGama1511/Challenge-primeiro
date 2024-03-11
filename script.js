var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufa");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto +
        '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDesCripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufa/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDesCripto +
        '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('input-texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}
