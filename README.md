# Simulador de Exame Web

Aplicação convertida de um projeto Java desktop para Next.js. O sistema usa dados locais em JSON, lógica de quiz no frontend e não precisa de backend.

## Estrutura do projeto

- `pages/index.js` — página inicial com lista de exames/testes.
- `pages/quiz/[quizId].js` — página do quiz dinâmica.
- `components/QuestionCard.js` — exibe a pergunta e o enunciado.
- `components/AnswerOptions.js` — renderiza as opções e o estilo de revisão.
- `components/QuizSummary.js` — mostra resultado final e pontuação.
- `data/quiz-data.json` — dados das perguntas extraídos do projeto Java.
- `styles/*.css` — CSS moderno e responsivo usando CSS Modules.

## Execução

1. Abra o terminal em `simulador-web`
2. Execute `npm install`
3. Execute `npm run dev`
4. Abra `http://localhost:3000`

## Deploy

Projeto preparado para hospedagem estática com assets locais e CSS moderno. Use `npm run build` para gerar os artefatos de produção.
