document.addEventListener('DOMContentLoaded', function () {
    const buscaInput = document.getElementById('busca-livro');
    const resultadosLivros = document.getElementById('resultados-livros');
    const modal = document.getElementById('janela-modal');
    const modalContent = modal.querySelector('.modal-conteudo');

    buscaInput.addEventListener('input', function () {
        const termoBusca = buscaInput.value.toLowerCase();
        const apiKey = 'AIzaSyCPOYHvQlHv0KDx0odIJqjU1cLQbeQHna0'; // Substitua pela sua própria chave de API
        const maxResults = 16;

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termoBusca)}&key=${apiKey}&maxResults=${maxResults}`)
            .then(response => response.json())
            .then(data => displayResults(data.items.map(item => ({
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors || ['Autor desconhecido'],
                description: item.volumeInfo.description || 'Descrição não disponível.',
                publisher: item.volumeInfo.publisher || 'Editora desconhecida',
                publishedDate: item.volumeInfo.publishedDate || 'Data de publicação desconhecida',
                thumbnail: item.volumeInfo.imageLinks?.thumbnail || 'sem-capa'
            }))));
    });

    function displayResults(resultados) {
        resultadosLivros.innerHTML = resultados.length === 0 ? '<p>Nenhum resultado encontrado.</p>' : resultados.map(book => `
          <div class="livro" data-book-id="${book.id}">
              <img src="${book.thumbnail === 'sem-capa' ? 'assets/livros/semCapa.png' : book.thumbnail}" alt="${book.title}" class="${book.thumbnail === 'sem-capa' ? 'sem-capa' : ''}">
              <div class="titulo-autor">
                  <h3>${book.title}</h3>
                  <p>${book.authors.join(', ')}</p>
              </div>
          </div>`).join('');

        document.querySelectorAll('.livro').forEach(bookElement => {
            bookElement.addEventListener('click', () => openModal(resultados.find(book => book.id === bookElement.dataset.bookId)));
        });
    }

    //Formata a data
    function formataData(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', options);
    }
    
    function openModal(book) {
        modal.classList.add('abrir');
        document.body.classList.add('modal-aberto');

        const coverImage = book.thumbnail !== 'sem-capa' ? book.thumbnail : 'assets/livros/semCapa.png';

        modalContent.innerHTML = `
      
        <div class="modal-header">
        <button class="fechar" id="fechar">&times;</button>
    </div>

    <div class="modal-body">

        <div class="livro-modal">
            <img src="${coverImage}" alt="${book.title}" class="cover-image">
            
            <div class="informacoes-livro">
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.authors.join(', ')}</p>
                <p><strong>Sinopse:</strong> ${book.description}</p>
                <p><strong>Data de publicação:</strong> ${formataData(book.publishedDate)}</p>
            </div>
            
        </div>

    </div>
`;

        modal.addEventListener('click', (e) => {
            if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
                modal.classList.remove('abrir');
                document.body.classList.remove('modal-aberto');
            }
        });
    }
});
