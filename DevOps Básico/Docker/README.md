# Docker installation
https://medium.com/@supportfly/how-to-install-docker-on-windows-bead8c658a68

# Docker Commands

>> Login no Hub
docker login

>> Logout
docker logout

>> Troca de Tag
docker tag pucrs/docker-ubuntu:v1 danilomarques/pucrs:v1

>> Envio para o Hub
docker push danilomarques/pucrs:v1

>> Build
docker biuld -t danilomarques/pucrs:v1 . [path_dockerfile]

>> Run
docker run --name aula-pucrs -p 8080:80 danilomarques/pucrs:v1

>> Remove containers / imagens
docker rm -f $(docker ps -qa)
docker rm -f $(docker images -q)