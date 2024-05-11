var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var clientes = document.querySelectorAll(".cliente");

    //Verifica se tem criterio de busca
    if (this.value.length > 0) {
        for (var cli = 0; cli < clientes.length; cli++) {

            //tras apenas o nome unico e não a tag toda
            var nome = clientes[cli].querySelector(".nome").textContent;

            var expressao = new RegExp(this.value, "i");


            //Verifica cliente conforme criterio de busca
            //if (nome != this.value) {
            if(!expressao.test(nome)){
                clientes[cli].classList.add("invisivel");
            } else {
                clientes[cli].classList.remove("invisivel");
            }
        }
    } else {
        for (var cli = 0; cli < clientes.length; cli++) {
            clientes[cli].classList.remove("invisivel");

        }
    }
});