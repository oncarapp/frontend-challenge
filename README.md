# OnCar Front-End Challenge

Seja bem-vinde ao teste Front-End da OnCar!

## Desafio

O desafio consiste em criar um gerenciador de projetos no molde kanban, onde o usuário pode cadastrar quadros (projetos) com as colunas que desejar e cadastrar cards (tasks), como no *Trello*.

---

Você pode clonar este repositório e desenvolver em uma branch própria que deve ser nomeado com o seguinte padrão: `DD-MM-YYYY/NAME-LASTNAME`. Após o desenvolvimento, abra um pull request no repositório para a branch `main`. Ali você pode dar detalhes técnicos, se necessário. Vamos avaliar seu teste a partir deste pull request.

### Design

Você pode acessar o design do projeto através [deste link](https://www.figma.com/file/bsVGxuUshATsarQ7FkpR2w/Teste-Front).

---

Os critérios de aceite do desafio, variam de acordo com a senioridade.

> **Atenção:** Leia os critérios de aceite de todos os cargos antes para evitar trabalho desnecessário.

### Junior

- Página inicial
  - Busca por nome de quadros.
- Página do kanban
  - Criar um novo quadro.
  - Visualizar um quadro.
  - Adicionar/Editar tasks.
  - Adicionar/Editar coluna.
  - Mover cards entre colunas.

### Pleno

- Todos os critérios do cargo anterior.
- Página inicial
  - Todos os critérios do cargo anterior.
  - Filtrar por categoria.
- Favoritos
  - Todos os critérios do cargo anterior.
  - Busca por nome dos quadros favoritados.
  - Adicionar ou remover dos favoritos.
- Página do kanban
  - Todos os critérios do cargo anterior.
- Profile
  - Edição do usuário.
- Consumir todos os dados do mock API que está no repo ([db.json](db.json)).

### Senior

- Todos os critérios dos cargos anteriores.
- Testes.
- Fazer telas responsivas para mobile e desk.
- Boas práticas de arquitetura.

> Critérios básicos como pixel perfect e organização no git, serão avaliados em todos os níveis.

Quando finalizar o projeto, abra um pull request para a branch `main` e em seguida nossa equipe técnica irá avaliar seu teste!

## Projeto

O único critério na stack, é que a aplicação seja desenvolvida com React. O repositório já está configurado através do `create-react-app` para facilitar o desenvolvimento do boilerplate.

### Configurações de ambiente

- Node
- Yarn

### Rodando o projeto

Scripts pré-configurados.

#### `yarn start`

Inicia a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para ver o app rodando.

#### `yarn test`

Inicia o test runner

### API

Para candidatos no nível pleno e senior, será avaliado como é feito consumo de API's. No repositório já tem um mock API que pode ser utilizado para facilitar do desenvolvimento. Para rodar a API, execute `yarn api`.

Essa api é feita a partir do [json-server](https://www.npmjs.com/package/json-server), que gera uma fake REST API. Para mais informações, consulte a documentação [aqui](https://github.com/typicode/json-server#getting-started).
