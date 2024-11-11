var resultado = document.getElementById('valor');

import { calcular } from './calculadora.js';

var resultado = document.getElementById('valor');

function calcularExpressao() {
    var expressao = resultado.value;
    resultado.value = calcular(expressao);
}

function validateInput() {
    resultado.value = resultado.value.replace(/[^0-9+\-*/.,]/g, '');
}

resultado.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calcularExpressao();
    }
});

resultado.addEventListener('input', validateInput);
