# fullcycle-02-docker
Repositório dos código do Curso FullCycle 3.0

Esse código é referente aos exemplos feitos na aula:

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


Para subir o exemplo do laravel com o nginx na frente como proxy reverso:

```bash
    docker compose -f docker-compose-laravel.yml up
```
ou
```bash
    docker-compose -f docker-compose-laravel.yml  up
```