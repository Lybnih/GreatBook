function adicionarEncomendasTabela(encomendas) {
    var tabela = document.querySelector('.tabela');

    encomendas.forEach(function(cada_encomenda) {
        var novaLinha = tabela.insertRow(-1);
        novaLinha.classList.add('cliente');
        novaLinha.setAttribute("ondblclick", "apagaLinha(this)");
        novaLinha.innerHTML = '<td class="nome">' + cada_encomenda.nome + '</td>' +
                              '<td class="prod">' + cada_encomenda.prod + '</td>' +
                              '<td class="qtde">' + cada_encomenda.qtde + '</td>' +
                              '<td class="unidade">' + formatarMoeda(cada_encomenda.unidade) + '</td>' +
                              '<td class="total">' + formatarMoeda(cada_encomenda.qtde * cada_encomenda.unidade) + '</td>';
    });
}

// Função para formatar o valor para o padrão de moeda
function formatarMoeda(valor) {
    var nValor = parseFloat(valor);
    var x = nValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return x;
}
