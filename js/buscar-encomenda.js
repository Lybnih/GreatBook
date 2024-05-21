var botaoBuscar = document.querySelector("#buscar-encomendas");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        
        var encomendas = JSON.parse(resposta);

        encomendas.forEach(Function(cada_encomenda){
            add(cada_encomenda);
        });
    })

    xhr.send();
})