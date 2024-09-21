# CRUD com NestJS e Prisma

## Descrição

Este projeto é uma aplicação backend que implementa um sistema CRUD (Create, Read, Update, Delete) utilizando **NestJS** como framework e **Prisma** como ORM (Object-Relational Mapping). O objetivo é fornecer uma estrutura sólida e escalável para gerenciamento de dados.

## Tecnologias Utilizadas

- **NestJS**: Framework Node.js progressivo para a construção de aplicações eficientes e escaláveis.
- **Prisma**: ORM moderno e tipo seguro para Node.js e TypeScript.
- **SQLite**: Banco de dados leve e embutido.

## Funcionalidades

- Criar, ler, atualizar e deletar registros.
- Validação de dados de entrada.
- Rotas RESTful para interação com a API.
- Conexão com o banco de dados usando Prisma.

## Pré-requisitos

- Node.js (versão 14 ou superior)

## Setup do Projeto

```bash
$ npm install

# Renomeie o arquivo .env.example para .env e configure a variável de ambiente para usar SQLite:
$ DATABASE_URL="file:./dev.db"

$ npx prisma migrate dev --name init

$ Faça o import do arquivo Insomnia_2024-09-21.json, para testar os endpoints
```

## Compile e rode o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Abra na porta [http://localhost:5000](http://localhost:5000) no Insomnia para visualizar os resultados da API.

Contato
Para mais informações, entre em contato com seu fernando.terumasa.ikeda@gmail.com