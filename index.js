const scriptJs = document.getElementById('javascript');
const msgHello1 = document.getElementById('alert');
const msg = ["<h2>Hello world</h2>", "<h5>Hello world</><br>", "<button>Hello world</button>"]


function adiciona() {
    msgHello1.innerHTML = msg.join("");
}

adiciona();

function concatena() {
var one = '<li>Hello world</li>';
    if(true) {
        var joined = one;
        var container = joined;
        scriptJs.innerHTML = container;
    }
}

concatena();

const olaMundo3 = () => '<p>Hello World</p>'
document.write(olaMundo3());

function olaMundo() {    
    var h4 = document.createElement("h4");

    h4.textContent = "Hello world";
    document.body.appendChild(h4)
}

olaMundo();

const olaMundo4 = () => '<a>Hello world</a>'
document.write(olaMundo4());

function titleHello(texto) {
    var listaOrdenada = document.createElement("ol");
    var itemLista = document.createElement("li");
    itemLista.textContent = texto;
    listaOrdenada.appendChild(itemLista);

    var container = document.getElementsByClassName('container')[0];
    container.appendChild(listaOrdenada);
}

titleHello("Hello world");



function olaMundo2() {
    return '<h1>Hello world</h1>'
}

var mensagem = document.getElementById('mensagem');
mensagem.innerHTML = olaMundo2();

document.write('<strong>Hello world</strong>');



