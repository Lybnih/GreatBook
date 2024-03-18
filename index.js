// Captura os clientes que fizeram a encomenda
var clientes = document.querySelectorAll(".cliente");


for (var i=0; i< clientes.length; i++) {


    // Captura a quantidade de encomenda
    var qtde = clientes[i].querySelector(".qtde").textContent;


    // Captura o valor unitario do produto
    var unidade = clientes[i].querySelector(".unidade").textContent;
    reais(unidade);

    // Verifica se a quantidade é numero valido
    if(qtde < 1 || isNaN(qtde)){
        clientes[i].querySelector(".qtde").textContent = "Quantidade inválida";
        clientes[i].querySelector(".qtde").style.color="red";
        clientes[i].querySelector(".total").textContent = 0;
    } else if(!valUni(unidade)){
        // A quantiade esta certa, pode prosseguir
        // Exibe o valor total
        clientes[i].querySelector(".total").textContent = calculaTotal(qtde,unidade);
        clientes[i].style.backgroundColor="red";
        clientes[i].querySelector(".total").textContent = reais(0);
    } else{
        // A quantidade e o valor unitário estão corretos, pode prosseguir
        var total = calculaTotal(qtde, unidade);
        clientes[i].querySelector(".total").textContent = reais(total);
    }


}


// Função para calcular o valor total
function calculaTotal(qtde, unidade){
    var total = 0;


    total = qtde * unidade;


    return total;
}


function valQtde(qtde) {
    return qtde >= 1 && !isNaN(qtde);


}


// Função para validar o valor unitário
function valUni(unidade) {
    return unidade >= 1 && !isNaN(unidade);
}


// Função para formatar em reais
function reais(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}



