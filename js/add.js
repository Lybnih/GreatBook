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

//remove
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500)
    
})

function adicionaEncomenda(encomenda) {
    const tabelaIndex = document.querySelector(".tabela");
    const tabelaBody = tabelaIndex.querySelector("tbody");
    const novaLinha = tabelaBody.insertRow();

    novaLinha.classList.add("cliente");
    novaLinha.setAttribute("ondblclick", "apagaLinha(this)");

    novaLinha.insertCell(0).textContent = encomenda["nome"];
    novaLinha.insertCell(1).textContent = encomenda["prod"];
    novaLinha.insertCell(2).textContent = encomenda["qtde"];
    //novaLinha.insertCell(3).textContent = encomenda["unidade"];
   // novaLinha.insertCell(4).textContent = encomenda["total"];

     // Verificação e formatação do valor unitário
     var unitario = encomenda["unidade"];
     if (valUni(unitario)) {
         novaLinha.insertCell(3).textContent = formatarMoeda(unitario);
     } else {
         novaLinha.insertCell(3).textContent = "Valor inválido";
     }
     // Calcular e formatar o valor total
     var qtde = encomenda["qtde"];
     if (valQtde(qtde) && valUni(unitario)) {
         var total = parseFloat(qtde) * parseFloat(unitario);
         novaLinha.insertCell(4).textContent = formatarMoeda(total);
     } else {
         novaLinha.insertCell(4).textContent = formatarMoeda(0);
     }



    novaLinha.cells[0].classList.add("nome");
    novaLinha.cells[1].classList.add("prod");
    novaLinha.cells[2].classList.add("qtde");
    novaLinha.cells[3].classList.add("unidade");
    novaLinha.cells[4].classList.add("total");

}

function valQtde(qtde) {
    return !isNaN(qtde) && qtde > 0;
}

function valUni(unitario) {
    return !isNaN(unitario) && unitario > 0;
}

function formatarMoeda(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}


