function insert(num) {
    document.getElementById('valor').value += num;
}

    function clean() {
        document.getElementById('valor').value = "";
    }

function calcular() {
    var resultado = document.getElementById('valor').value; // pega o valor do input

    if(resultado) {
        document.getElementById('valor').value = eval(resultado); 
    }
}

var resultado = document.getElementById('valor');
function validateInput(resultado) {
    resultado.value = resultado.value.replace(/[^0-9+\-*/.,]/g, ''); //substitui os elementos
}

validateInput();