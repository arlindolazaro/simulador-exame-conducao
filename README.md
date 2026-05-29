# Simulador de Exame de Condução

Aplicação web desenvolvida com Next.js para simular testes e exames de condução de forma prática, visual e responsiva. O projeto foi pensado para funcionar de forma independente, sem backend, usando dados locais em JSON e uma experiência interativa no frontend.

## Visão geral

Este projeto oferece:

- simulação de exames e testes de condução;
- navegação entre categorias como "Exames completos" e "Testes rápidos";
- perguntas com opções múltiplas e feedback visual;
- resumo final com contagem de acertos e progresso;
- interface moderna, responsiva e pronta para uso local ou produção.

## Funcionalidades principais

- Página inicial com escolha de categoria e nome do usuário.
- Lista dinâmica de quizzes baseada no arquivo de dados.
- Navegação entre perguntas com botão anterior/próximo.
- Marcação de respostas respondidas e progresso em tempo real.
- Finalização do quiz com pontuação final.
- Recomeço do quiz a qualquer momento.

## Tecnologias utilizadas

- Next.js 14
- React 18
- JavaScript
- CSS Modules
- JSON local para armazenamento das questões

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm 9 ou superior

## Instalação

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse no navegador:

   ```text
   http://localhost:3000
   ```

## Como usar

1. Na página inicial, informe seu nome (opcional, mas recomendado).
2. Escolha entre "Exames completos" ou "Testes rápidos".
3. Selecione um quiz da lista exibida.
4. Responda cada pergunta e navegue entre elas.
5. Clique em "Finalizar Quiz" para ver o resultado.
6. Use "Refazer" para reiniciar a simulação.

## Estrutura do projeto

- `pages/index.js` — página inicial e seleção de categorias.
- `pages/quiz/[quizId].js` — página dinâmica do quiz.
- `components/Layout.js` — estrutura base da interface.
- `components/QuestionCard.js` — exibe a pergunta atual e suas opções.
- `components/AnswerOptions.js` — renderiza as respostas e o estado de revisão.
- `components/QuizSummary.js` — mostra o resultado final do simulador.
- `data/quiz-data.json` — conjunto de questões e quizzes usados pela aplicação.
- `styles/` — estilos CSS Modules para layout, home e quiz.
- `public/` — arquivos estáticos públicos.

## Arquivo de dados

As perguntas são carregadas do arquivo `data/quiz-data.json`. Esse arquivo centraliza:

- identificadores dos quizzes;
- títulos e descrições;
- lista de perguntas;
- alternativa correta;
- texto das respostas.

Se quiser expandir o simulador, edite esse arquivo para adicionar novas questões ou novos testes.

## Scripts disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o projeto em modo de desenvolvimento com hot reload.

### Build de produção

```bash
npm run build
```

Gera a versão otimizada para produção.

### Iniciar versão pronta

```bash
npm run start
```

Executa a build já gerada em modo produção.

## Deploy

A aplicação está preparada para implantação em serviços que suportam Next.js, como:

- Vercel
- Netlify
- hospedagem VPS com Node.js
- ambientes estáticos compatíveis com Next.js

Para publicar em produção:

1. execute `npm run build`;
2. inicie com `npm run start`;
3. configure a plataforma de hospedagem conforme a documentação do serviço escolhido.

## Dicas de manutenção

- mantenha as perguntas organizadas no arquivo `data/quiz-data.json`;
- prefira alterações visuais no diretório `styles/`;
- use `npm run build` sempre que fizer alterações importantes antes de publicar.

## Solução de problemas

Se o projeto não iniciar:

- confirme que o Node.js e o npm estão instalados;
- execute `npm install` novamente;
- verifique se a porta `3000` não está ocupada;
- reinicie o servidor com `npm run dev`.

## Resumo

Este projeto funciona como um simulador leve, didático e fácil de manter, ideal para treinar conhecimentos de condução com uma interface moderna e sem dependência de backend.

