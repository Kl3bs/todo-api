## Instalção

Este projeto requer [Node.js](https://nodejs.org/) v10+ para ser executado.

Instalação das dependências.

```sh
cd todo-api
npm i
```

Certifique-se de criar uma conexão MySQL, adicionar usuário e senha ao arquivo `db.config.js`, além do nome do banco de dados. Para simplificar, você pode baixar uma cópia do banco de dados que usei através [deste link](https://drive.google.com/file/d/1RTjMsyRFm23_px8nhg-PrcWSgTgjKTMN/view?usp=sharing).

## Execução do projeto

```sh
npm start
```

## Rotas

| Método   | Rota                           | Conteúdo                                        |
| -------- | ------------------------------ | ----------------------------------------------- |
| `GET`    | /api/v1/tasks                  | Array contendo todas as tasks                   |
| `GET`    | /api/v1/tasks/id               | Retorna a task com base no id fornecido         |
| `PUT`    | /api/v1/tasks/id               | Edita a task com base no id fornecido           |
| `DELETE` | /api/v1/tasks/id               | Deleta a task com base no id fornecido          |
| `POST`   | /api/v1/tasks                  | Aiciona uma nova task                           |
| `GET`    | /api/v1/tasks?title=task_title | Array com as tasks filtradas pela query `title` |
