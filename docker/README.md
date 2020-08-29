# docker volumes

Volumes are used to maintain data persistence even when the database/service goes offline. However, there are different ways to create these volumes in docker. This is my attempt in understanding them. 

## General commands

### Create or start (if already exists) a docker container

`docker-compose up` to see logs within the container (attached to container).
`docker-compose up -d` detaches the terminal from the container. 
`docker-compose up -f docker-compose.host.yml` specifies the docker-compose file to execute. It defaults to `docker-compose.yml`. 

### Removing/Deleting a docker container

`docker-compose down` to delete container and related network. 
`docker-compose stop` to only stop the container from running. The docker container will still exists. 
`docker-compose down -v` to delete container with its named volumes as well. 

### General docker commands

`docker start <container-name>` to start an already created docker container. 
`docker stop <container-name>` to stop a running docker container. 
`docker rm <container-name>` to delete a docker container. 

## Configuration

### environment
`POSTGRES_DB` sets database name.
`POSTGRES_USER` sets database username.
`POSTGRES_PASSWORD` sets database password. 
These are specific to Postgresql.

## container_name
This sets the container's name. If unspecified, docker-compose will assign an unused container name. 

## Differences in volume creation

### docker-compose.host.yml

This file uses (from what I understand) named volumes. Whenever we use named volumes, we need to declare the names on the top-level under `volumes`. 
We can see the named volumes using the command `docker volume ls`.
This configuration allows for data persistence even when the docker container that uses the DB is removed (which is done with `docker-compose down`). Hence this would be favoured if you want the highest level of persistence. 

To remove the named volume with the container, we can use `docker-compose down -v`.

### docker-compose.container.yml
This file also uses volumes (not sure on the specific term). However, it appears that the volume used are tied to the container itself. When the docker container is removed via `docker-compose down`, and re-created using `docker-compose up`, the data commited before is not persisted. 

This configuration would most be more preferred for databases used for purely testing purposes. 
