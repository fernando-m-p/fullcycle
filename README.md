# Curso FullCycle 3.0

## Módulo 2 - Docker (Desafio 01 - Go) 

O desafio foi fazer uma imagem docker com o tamanho de no máximo 2MB, com a execução deve mostrar na tela 'Full Cycle Rocks!!'

Para Buildar minha imagem usei:
```bash
    docker buildx build --no-cache -t fermope/desafio-go .
```
Para executar usei o seguinte comando
```bash
    docker run fermope/desafio-go
```

O link para a imagem no Docker Hub é: [link](https://hub.docker.com/repository/docker/fermope/desafio-go/general)

