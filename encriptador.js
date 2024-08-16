
function encriptar(){
    let frase = document.getElementById("texto").value.toLocaleLowerCase();
    let textoCifrado = frase.replace(/e/img, "enter").replace(/i/img, "imes").replace(/a/img, "ai").replace(/o/img, "ober").replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").value = textoCifrado;
}

function desencriptar(){
    let frase = document.getElementById("texto").value.toLocaleLowerCase();
    let textoCifrado = frase.replace(/enter/img, "e").replace(/imes/img, "i").replace(/ai/img, "a").replace(/ober/img, "o").replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").value = textoCifrado;
}
function copiarTexto() {
    let textoDesencriptado = document.getElementById("textoDesencriptado");
    textoDesencriptado.select();
    textoDesencriptado.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textoDesencriptado.value)
}

function validarInput() {
    let input = document.getElementById("texto");
    input.value = input.value.toLocaleLowerCase().replace(/[^a-zñ,.?¿!¡;:\s]/g, '');
}