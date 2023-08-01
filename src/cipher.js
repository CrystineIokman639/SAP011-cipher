// Função para cifrar (criptografar) o texto com a Cifra de César
function encode(deslocamento, texto) {
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let resultado = '';
  texto = texto.toUpperCase();

  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    // Verifica se o caractere atual está no alfabeto (letra maiúscula)
    if (alfabeto.indexOf(char) !== -1) {
      const posicao = alfabeto.indexOf(char);

      // Calcula a nova posição do caractere após o deslocamento
      let novaPosicao = (posicao + deslocamento) % 26;
      if (novaPosicao < 0) {
        novaPosicao=26 + deslocamento + posicao;
      }
      // Obtém o caractere cifrado com base na nova posição
      char = alfabeto[novaPosicao];
    }
    // Adiciona o caractere (cifrado ou não) ao resultado
    resultado += char;
  }
  // Retorna o texto cifrado (resultado)
  return resultado;
}

// Função para realizar o processo de decifragem (descriptografia)
function decode(deslocamento, texto) {

  // Chama a função "encode" com um deslocamento negativo para decifrar o texto
  return cipher.encode(26 - deslocamento, texto);
}

// Objeto "cipher" contendo as funções "encode" e "decode" como propriedades
const cipher = {
  encode,
  decode
};

// Exporta o objeto "cipher" para ser utilizado em outros módulos (apenas se estiver utilizando módulos)
export default cipher;
