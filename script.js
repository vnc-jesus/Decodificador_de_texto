document.addEventListener('DOMContentLoaded', () => {
    const inputTexto = document.getElementById('input-texto');

    inputTexto.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-z\s]/g, '');
    });
});

function criptografar() {
    const textInput = document.querySelector("#input-texto").value;
    const textOutput = textInput.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    mostrarResultado(textOutput);
}

function descriptografar() {
    const textInput = document.querySelector("#input-texto").value;
    const textOutput = textInput.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    mostrarResultado(textOutput);
}

function mostrarResultado(texto) {
    const outputSection = document.getElementById('output-section');
    const outputText = document.getElementById('output-text');

    outputText.value = texto;
    outputSection.classList.remove('hidden');
}

function copiar() {
    const outputText = document.getElementById('output-text');
    
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Texto copiado");
}
