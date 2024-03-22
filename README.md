# Curso FullCycle 3.0

## Módulo 2 - Docker (Desafio 01 - Go) 

### O desafio foi fazer um projeto em que executando o comando de subir os containers suba:
- Um container com um banco de dados
- Um container com a aplicação Node/Javasript para mostrar: 
- - <h1>Full Cycle Rocks!</h1>
- - Lista de nomes cadastrada no banco de dados.
- Um container com um Nginx como proxy reverso.


### Diferenças do meu projeto:
- Função para verificar se a tabela está criada e se não é criada a tabela;
- Endpoint de cadastro de um novo registro no banco de dados;
- Input e um link para acessar o endpoint de cadastro para o usuário criar um novo registro da página inicial;
- Endpoint de deleção de um respectivo registro;
- Link ao lado de cada nome cadastrado para excluir o registo.


## Executando o projeto
Para criar as imagens do node e do banco de dados
```bash
    docker compose build
```
ou
```bash
    docker-compose build
```

Para subir os containers com o banco de dados e um container rodando node
```bash
    docker compose up
```
ou
```bash
    docker-compose up
```

