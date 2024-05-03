document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento de envio ao formulário
    document.querySelector('form[name="add"]').addEventListener('submit', function(event) {
        // Previne o envio padrão do formulário
        event.preventDefault();

        // Captura os valores dos campos do formulário
        var nome = document.getElementById('nome').value;
        var produto = document.getElementById('produto').value;
        var quantidade = document.getElementById('qtde').value;
        var unidade = document.getElementById('unidade').value;

        // Verifica se os valores são válidos
        if (nome && produto && quantidade && unidade) {

            var total = quantidade * unidade;

            // Cria uma nova linha na tabela com os valores capturados
            var tabela = document.querySelector('.tabela');
            var novaLinha = tabela.insertRow(-1);
            novaLinha.classList.add('cliente');
            novaLinha.setAttribute("ondblclick", "apagaLinha(this)");
            novaLinha.innerHTML = '<td class="nome">' + nome + '</td>' +
                                  '<td class="prod">' + produto + '</td>' +
                                  '<td class="qtde">' + quantidade + '</td>' +
                                  '<td class="unidade">' + formatarMoeda(unidade)  + '</td>' +
                                  '<td class="total">' + formatarMoeda(total)  + '</td>';
            
            // Limpa os valores dos campos do formulário
            document.getElementById('nome').value = '';
            document.getElementById('produto').value = '';
            document.getElementById('qtde').value = '';
            document.getElementById('unidade').value = '';
        } else {
            // Exibe uma mensagem de erro caso algum campo esteja vazio
            alert('Por favor, preencha todos os campos.');
        }
    });

        // Função para formatar o valor para o padrão de moeda
        function formatarMoeda(valor) {
           var nValor = parseFloat(valor);
           var x = nValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
           return x;
        }
});

/* Apagar linha */
function apagaLinha(linha) {
    linha.parentNode.removeChild(linha);
}


