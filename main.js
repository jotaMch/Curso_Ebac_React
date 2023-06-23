const form = document.getElementById('form');
const nome = [];
const idade = [];
const profissao =[];
const senioridade = [];

let linhas = '';


form.addEventListener('submit', function(event) {
    event.preventDefault();

    function loading() {
        const loadingClass = document.querySelector('.loading');
        const loadingGif = '<img src="img/icons8-sand-timer-50.png" alt="Carregando...">';
    
        loadingClass.innerHTML = loadingGif;
    }

    function formSubmit() {
        const nomeInput = document.getElementById('nome').value;
        const idadeInput = document.querySelector('input[name="idade"]:checked').value;
        const profissaoInput = document.getElementById('profissao').value;
        const senioridadeInput = document.querySelector('input[name="senioridade"]:checked').value;

        if (nome.includes(nomeInput)) {
            //alert(`Nome ${nomeInput} já existe!`);
            alertaErro();
        } else {
            nome.push(nomeInput);
            idade.push(idadeInput);
            profissao.push(profissaoInput);
            senioridade.push(senioridadeInput);
            //alert("Nome adicionado com sucesso!");
            console.log(nome)

            linha = '<tr>';
            linha += `<td>${nomeInput} </td>`;
            linha += `<td>${idadeInput} </td>`;
            linha += `<td>${profissaoInput} </td>`;
            linha += `<td>${senioridadeInput} </td>`;
            
            linhas += linha;
        }

        respostasTbody();
        limparCampos();
    }

    loading();
    esconderGif();
    setTimeout(formSubmit, 2000);

});

function respostasTbody() {
    const corpoAtualiza = document.querySelector('tbody');
    corpoAtualiza.innerHTML = linhas;
}

function esconderGif() {
    const loading = document.querySelector('.loading');
    setTimeout(function() {
        loading.innerHTML = '';
    }, 1900);
}

function alertaErro() {
    const errorClass = document.querySelector('.error');
    const nomeInput = document.getElementById('nome').value;
    const alertError = `<p> Atenção: O nome ${nomeInput} já foi inserido </p>`;

    errorClass.innerHTML = alertError;
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.querySelector('input[name="idade"]:checked').checked = false;
    document.getElementById('profissao').value = '';
    document.querySelector('input[name="senioridade"]:checked').checked = false;
}