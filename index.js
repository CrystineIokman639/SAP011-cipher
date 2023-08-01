import cipher from './cipher.js'

// Função para lidar com o clique do botão e executar a criptografia
function handleCifrar() {
  const texto = document.getElementById('texto').value;
  const deslocamento = parseInt(document.getElementById('deslocamento').value);
  const resultadoElement = document.getElementById('resultado');
  const resultado = cipher.encode(deslocamento, texto);
  resultadoElement.textContent = resultado;
}

// Função para manipular o clique do botão e executar a descriptografia
function handleDescifrar() {
  const texto = document.getElementById('texto').value;
  const deslocamento = parseInt(document.getElementById('deslocamento').value);
  const resultadoElement = document.getElementById('resultado');
  const resultado = cipher.decode(deslocamento, texto);
  resultadoElement.textContent = resultado;
}

// Event listeners dos botoes
document.querySelector('.cifrar-button').addEventListener('click', handleCifrar);
document.querySelector('.descifrar-button').addEventListener('click', handleDescifrar);