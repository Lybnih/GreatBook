// Função para buscar livros na API do Google Books
async function buscarLivros() {
    const termoBusca = document.getElementById("busca-livro").value;
    const apiKey = 'AIzaSyCPOYHvQlHv0KDx0odIJqjU1cLQbeQHna0';
  
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termoBusca)}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.totalItems > 0) {
        exibirResultadosLivros(data.items);
      } else {
        document.getElementById("resultados-livros").innerHTML = "Nenhum livro encontrado.";
      }
  
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      document.getElementById("resultados-livros").innerHTML = "Erro ao buscar livros. Tente novamente mais tarde.";
    }
  }
  
  // Função para exibir os resultados da busca
  function exibirResultadosLivros(livros) {
    let html = '';
    livros.forEach(livro => {
      html += `<div class="livro">`;
      if (livro.volumeInfo.imageLinks) {
        html += `<img src="${livro.volumeInfo.imageLinks.thumbnail}" alt="${livro.volumeInfo.title}">`;
      }else {
        html += `<img src="assets/livros/semCapa.png" alt="Sem capa" class="sem-capa">`;
      }
      html += `<h3>${livro.volumeInfo.title}</h3>`;
      html += `<p>${livro.volumeInfo.authors ? livro.volumeInfo.authors.join(", ") : "Autor desconhecido"}</p>`;

      html += `</div>`;
    });
    document.getElementById("resultados-livros").innerHTML = html;
  }
  
  // Adicionar ouvinte de evento ao botão "Buscar"
  document.getElementById('busca-livro').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      buscarLivros(); // Chama a função de busca
    }
  });