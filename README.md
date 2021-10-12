# OnCar Front-End Challenge

### Pra executar o projeto

Há duas formas de rodar a aplicação, via docker-compose e via npm script.

#### 1) via npm script

Instale as dependências `npm install`, em seguida builda o projeto com `npm run build` e então rode `npm run serve`, esse último script vai upar a api e rodar a aplicação buildada ao mesmo tempo. Certifique-se das portas `5000` (frontend) e `8081` (backend json) estarem livres.

#### 2) via docker-compose

Estou utilizando Docker na versão 20.10.8 com docker-compose 1.21.2. Pra upar a aplicação apenas rode `docker-compose up`.

### Pra rodar testes e2e

A aplicação ta configurada pra receber testes e2e com cypress. Foi feito o teste e2e no drag/drop, pra executar basta certificar-se que não tenha nada na porta `8081` e `3000` e em seguida rodar `npm run test:e2e`.

### Pra rodar testes unitários
Apenas execute `npm test`.

### Pra rodar storybook
Pra documentar, explorar e debugar componentes de forma isolada, execute `npm run storybook`.