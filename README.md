
## Proyecto Sistema de Tareas para SEEK

## Levantar proyecto

Clonar repositorio
- https://github.com/FernandoNeirot/sistema-gestion-tareas_seek.git

ejecutar 

```bash
npm i

```
Agregar un archivo con las variables de configuracion en la raiz del proyecto.

NEXT_PUBLIC_FIREBASE_APIKEY=**********************<br>
NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=**********************<br>
NEXT_PUBLIC_FIREBASE_PROJECTID=**********************<br>
NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=**********************<br>
NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=**********************<br>
NEXT_PUBLIC_FIREBASE_APPID=**********************<br>

estas variables se consiguen al crear un proyecto en firebase,
las mismas variables seran enviadas en el mail para evitar su configuracion

Luego ejecutar el siguiente comando para levantar el proyecto en el puerto localhost:3000
(o el puesto que vsCode diga disponible en su dispositivo)

```bash
npm run dev
```

## Sobre el proyecto

Se utilizo una architectura hexagonal, que se divide en 4 capaz.
- Presentacion, es la capa con los archivos visuales.
- Aplicacion, es la capa que conecta la presentacion con la infraestructura.
La idea de esta capa es hacer alguna manipulacion de logica en los datos recibidos 
que la capa de presentacion requiera, y evitarle ese procesamiento.
- Dominio, es la capa central que se alojaran interfaces, funciones, constantes, etc.
- Infraestructura, es la capa que hace la peticion a un servicio de los datos requeridos.

La autenticacion se hace por medio de una api next, que consulta a firebase y valida si el mismo existe.
al ser valido el usuario, se hace una llamada al servicio "https://randomuser.me/api?gender=${userData.gender}"
para traer datos random de nombre y avatar.

Para la persistencia de datos se utilizo Firebase, para que se pueda probar la aplicaicon con tareas para usuario
y tambien mostrar una coneccion no solo a una api con fetch sino a firebase.

Exisiten 2 paginas, / que es home y /login.
si el usuario no esta logeado, nunca podra acceder a home.

Tambien se agregar un archivo de not-found si se pone una ruta erronea,
que lo lleva a home, y home valida que si no esta logeado, lo envia al login.

para jwt se usa solo el objeto de datos en una cookie, 
el cual simularia una jwt encriptada que contiene ciertos datos del usuario para poder usar en la aplicacion.

en la home al lado del user se agrega un icono de logout, para poder cerrar la session, y probar el login de otro usuario.


usuarios disponibles

user: test01<br>
pass: p12345

user: test02<br>
pass: p12345

user: test03<br>
pass: p12345

user: test04<br>
pass: p12345

Se agrega en home un contexto para pasar una funcion reload,
la cual es usada por crear y eliminar, para refrescar la data principal