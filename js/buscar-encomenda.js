document.addEventListener('DOMContentLoaded', function() {
    var botaoBuscar = document.querySelector("#buscar-encomendas");

    botaoBuscar.addEventListener("click", function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/encomendas");
        xhr.addEventListener("load", function() {
            if (xhr.status === 200) {
                var resposta = xhr.responseText;
                var encomendas = JSON.parse(resposta);

                // Chama a função para adicionar encomendas à tabela
                adicionarEncomendasTabela(encomendas);
            } else {
                console.error("Erro ao buscar encomendas:", xhr.statusText);
            }
        });

        xhr.send();
    });
});
