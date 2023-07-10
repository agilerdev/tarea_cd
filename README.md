# Evidencias

1. Primero creamos el repositorio de github, subimos el proyecto de nestjs

2. Configuramos un dockerfile para crear la imagen

![](./assets/1.png)

3. Probamos hacer un build de la imagen de forma local

![](./assets/2.png)

4. Creamos un token de acceso en DockerHub para poder subir la imagen y configurar los secrets en github

![](./assets/3.png)
![](./assets/4.png)

5. Creamos y configuramos el workflow para que se ejecute cuando se realice un push al repositorio en la rama master

![](./assets/5.png)
![](./assets/6.png)

6. Hacemos un push de un nuevo feature a la rama master para comprobar que se este realizando el workflow de forma correcta

![](./assets/7.png)

7. Configuramos el workflow para que ahora se agrege un numero aleatorio a nuestro tag del build de docker

![](./assets/8.png)

8. Probamos creando un nuevo feature y realizando push a master

![](./assets/9.png)

9. Verificamos en el dockerhub todas las imagenes que hemos creado y subido

![](./assets/10.png)
