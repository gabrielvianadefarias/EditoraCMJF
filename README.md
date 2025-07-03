📖 Livraria Grátis - Documentação do Projeto
Bem-vindo à documentação oficial do projeto Livraria Grátis. Este documento serve como um guia completo para entender, instalar e executar a aplicação.

1. Visão Geral
Livraria Grátis é uma aplicação web desenvolvida em React que tem como objetivo fornecer uma plataforma simples e intuitiva para a disponibilização de livros gratuitos em formato PDF. A interface é projetada para ser limpa, responsiva e de fácil navegação, permitindo que os usuários encontrem e baixem obras de domínio público ou cedidas para distribuição livre.

2. Funcionalidades Implementadas
O sistema conta com as seguintes funcionalidades:

Listagem de Livros: Exibição dos livros em um layout de grade na página inicial.

Design Responsivo: A grade de livros e o layout geral se adaptam a diferentes tamanhos de tela (desktop, tablet e celular).

Filtro por Categoria: Um menu dropdown no cabeçalho permite que os usuários filtrem os livros por gênero (Clássico, Ficção, etc.).

Busca em Tempo Real: Uma barra de pesquisa no cabeçalho filtra os livros por título ou autor à medida que o usuário digita.

Modal de Detalhes: Ao clicar em um card de livro, um modal é aberto com informações detalhadas, incluindo sinopse, ano de publicação, número de páginas e um botão de download.

Navegação entre Páginas: Uso de rotas para separar a aplicação em diferentes seções (Início, Avaliações, Sobre) sem a necessidade de recarregar a página.

Layout Consistente: Cabeçalho e rodapé fixos, presentes em todas as páginas da aplicação.

3. Tecnologias Utilizadas
React: Biblioteca principal para a construção da interface de usuário.

Vite: Ferramenta de build moderna e rápida para o desenvolvimento do projeto.

React Router DOM: Para gerenciamento de rotas e navegação na aplicação (SPA).

CoreUI for React: Biblioteca de componentes de UI utilizada para criar o cabeçalho e o dropdown de categorias.

CSS3: Para estilização customizada dos componentes e do layout.

4. Como Executar o Projeto
Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

Pré-requisitos:

Node.js (versão 16 ou superior)

npm ou Yarn

Passo 1: Clonar o Repositório

git clone <url-do-seu-repositorio>
cd nome-do-projeto

Passo 2: Instalar as Dependências
Execute o comando abaixo para instalar todas as bibliotecas necessárias.

npm install

Passo 3: Rodar a Aplicação
Após a instalação, inicie o servidor de desenvolvimento.

npm run dev

A aplicação estará disponível em http://localhost:5173 (ou a porta indicada no terminal).

5. Estrutura do Projeto
A estrutura de pastas principal do projeto está organizada da seguinte forma:

src/
├── components/       # Componentes reutilizáveis (peças da UI)
│   ├── Cabecalho.css
│   ├── Cabecalho.jsx
│   ├── CardLivro.css
│   ├── CardLivro.jsx
│   ├── ModalLivro.css
│   ├── ModalLivro.jsx
│   └── Rodape.jsx
│
├── pages/            # Componentes que representam páginas inteiras
│   ├── AvaliacoesPage.jsx
│   ├── HomePage.jsx
│   ├── Paginas.css
│   └── SobrePage.jsx
│
├── App.css           # Estilos globais do layout principal
├── App.jsx           # Componente raiz que define o layout e as rotas
└── main.jsx          # Ponto de entrada da aplicação

6. Documentação do Código
App.jsx
É o componente central da aplicação. Suas responsabilidades são:

Definir o layout principal, renderizando o Cabecalho e o Rodape.

Gerenciar os estados globais que precisam ser compartilhados entre componentes, como termoBusca e categoriaSelecionada (conceito de Lifting State Up).

Configurar as rotas da aplicação usando o <Routes> e <Route> do React Router, determinando qual página será exibida com base na URL.

HomePage.jsx
Representa a página inicial. Suas responsabilidades são:

Manter a lista de objetos de livros (listaDeLivros).

Receber termoBusca e categoriaSelecionada como props do App.jsx.

Filtrar a lista de livros com base nas props recebidas.

Renderizar a grade de componentes CardLivro com os livros filtrados.

Gerenciar o estado do modal (qual livro está selecionado e se o modal está visível).

Cabecalho.jsx
Componente de navegação superior, presente em todas as páginas.

Utiliza componentes da biblioteca CoreUI para a estrutura da navbar.

Contém os links de navegação (<Link>) para as páginas de Avaliações e Sobre.

O título/logo também é um link que leva de volta à página inicial.

Renderiza o dropdown de categorias e a barra de pesquisa, atualizando o estado que está no App.jsx.

CardLivro.jsx
Componente que representa um único livro na grade.

É um componente "burro" (presentational), recebendo todas as informações que precisa exibir via props.

É totalmente clicável para acionar a abertura do modal na HomePage.

Contém um sub-componente EstrelasAvaliacao para exibir a nota do livro.

ModalLivro.jsx
Componente que exibe os detalhes de um livro selecionado.

Aparece sobre um overlay que escurece o resto da página.

Recebe um objeto livro como prop e exibe suas informações detalhadas (capa, título, autor, sinopse, etc.).

O modal pode ser fechado clicando no botão "X" ou no overlay.

Rodape.jsx
Componente de rodapé, presente em todas as páginas.

Exibe informações de copyright com o ano atual sendo gerado dinamicamente.

É estilizado para se manter no final da página, mesmo em páginas com pouco conteúdo.