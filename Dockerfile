# Dockerfile
FROM mongo:7

# (Opcional) Define um diretório de dados customizado
VOLUME /data/db

EXPOSE 27017

CMD ["mongod"]