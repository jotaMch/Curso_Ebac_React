var resultado = document.getElementById('valor'); // pega o valor do input

function insert(num) {
    resultado.value += num;
}

    function clean() {
        resultado.value = "";
    }

function calcular() {
    var expressao = resultado.value;
    if(expressao) {
        resultado.value = eval(expressao); 
    }
}

function validateInput() {
    resultado.value = resultado.value.replace(/[^0-9+\-*/.,]/g, ''); //substitui os elementos
}


resultado.addEventListener('keydown', function(event) {
    var tecla = event.key;
    
    if (tecla === 'Enter') {
        event.preventDefault();
        calcular();
        }
    });

validateInput();