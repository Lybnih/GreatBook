// Função para buscar uma frase motivacional da API
async function buscarFrase() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      let frase = data.slip.advice;
  
      // Traduzir a frase para português usando a API do Google Translate
      const traducao = await traduzirFrase(frase);
      frase = traducao; // Substitui a frase original pela tradução
  
      document.getElementById('frases-result').textContent = frase;
    } catch (error) {
      console.error('Erro ao buscar frase:', error);
      document.getElementById('frases-result').textContent = 'Erro ao buscar frase. Tente novamente mais tarde.';
    }
  }
  
  // Função para traduzir a frase usando a API do Google Translate
  async function traduzirFrase(texto) {
    const apiKey = 'YOUR_API_KEY'; // Substitua pela sua chave API
    const url = `https://translation.googleapis.com/language/translate/v2?key=${ve8ricuivgtiio07gfc6nt9p7m60l2u}&source=en&target=pt&q=${encodeURIComponent(texto)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.translations[0].translatedText;
  }
  
  // Adiciona um ouvinte de evento ao botão "Gerar Frase"
  document.getElementById('gerar-frase').addEventListener('click', buscarFrase);