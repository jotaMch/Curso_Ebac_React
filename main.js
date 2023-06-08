function insert(num) {
    document.getElementById('valor').value += num;
}

    function clean() {
        document.getElementById('valor').value = "";
    }

function calcular() {
    var resultado = document.getElementById('valor').value;

    if(resultado) {
        document.getElementById('valor').value = eval(resultado);
    }
}