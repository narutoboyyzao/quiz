export const questions = [
  {
    id: 1,
    question: 'Qual palavra-chave permite declarar uma variável que não pode ter seu valor reatribuído?',
    options: ['let', 'var', 'const', 'static'],
    correctAnswer: 'const',
    explanation:
      'A palavra const cria uma referência constante. O valor da variável não pode ser reatribuído, embora objetos e arrays possam ser modificados internamente.',
  },
  {
    id: 2,
    question: 'Qual estrutura é usada para executar um bloco de código somente se a condição for verdadeira?',
    options: ['for', 'switch', 'if', 'while'],
    correctAnswer: 'if',
    explanation:
      'O if verifica uma condição e executa o bloco correspondente apenas quando o resultado é verdadeiro.',
  },
  {
    id: 3,
    question: 'Qual método transforma uma string em letras minúsculas?',
    options: ['toUpperCase()', 'trim()', 'toLowerCase()', 'slice()'],
    correctAnswer: 'toLowerCase()',
    explanation:
      'O método toLowerCase() retorna a string convertida para minúsculas.',
  },
  {
    id: 4,
    question: 'Qual destas opções representa corretamente um array em JavaScript?',
    options: ['{ "a", "b" }', "['a', 'b']", "('a', 'b')", '<a, b>'],
    correctAnswer: "['a', 'b']",
    explanation:
      'Arrays em JavaScript são declarados com colchetes e podem armazenar vários valores em uma única variável.',
  },
  {
    id: 5,
    question: 'Qual é a função de um loop for?',
    options: [
      'Criar variáveis globais',
      'Executar um bloco várias vezes até uma condição ser atendida',
      'Comparar strings sem sensibilidade de caso',
      'Definir funções reutilizáveis',
    ],
    correctAnswer: 'Executar um bloco várias vezes até uma condição ser atendida',
    explanation:
      'O loop for repete instruções enquanto uma condição é atendida, sendo muito útil para percorrer arrays e listas.',
  },
];
