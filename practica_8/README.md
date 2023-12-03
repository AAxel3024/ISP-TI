# Practica 8
# Diagrama Entidad Relacion:
![Evidencia 1](<./evidencias/1.jpg>)
# Deploy en Dockers aplicando Github Actions.
# 1) Crear repositorio público o privado (En el ejemplo se crea público para que todos tengan acceso al mismo). 
https://github.com/AAxel3024/practica_8.git
![evidencias](<./evidencias/Imagen_1.png>)

# 4)  Crear los Secrets Docker_User y Docker_Password en la Plataforma GITHUB
![evidencias](<./evidencias/Imagen_3.png>)
![evidencias](<./evidencias/Imagen_6.png>)
# 5/6) Utilizar su usuario y clave (token) de Docker Hub para llenar estos secrets. Crear Token en Docker (con el nombre Github-Actions) para que pueda ser utilizada en GitHub.
![evidencias](<./evidencias/Imagen_5.png>)
# 7/8) Copiar este Token generado en el Secret Docker_Password. Crear Action tipo Docker Image para que se genere el Workflow
![evidencias](<./evidencias/Imagen_8.png>)

# 11)   Aplicar los siguientes pasos en el archivo docker-image.yml para que genere los contenedores y sistematice las versiones.
```bash
 docker container run aaac30/nestjs-repository:nestjsserver
```
![evidencias](<./evidencias/Imagen_9.png>)
![evidencias](<./evidencias/Imagen_10.png>)

# 12) Ahora ya estamos listos para probar nuestro flujo realizando cambios en alguna parte de nuestro Proyecto y realizar un commit (recuerde utilizar palabras reservadas).
![evidencias](<./evidencias/Imagen_11.png>)
# Como podemos observar se subieron las imagenes automaticamente.
![evidencias](<./evidencias/Imagen_12.png>)