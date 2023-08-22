# Evaluacion modulo 8

## Repositorio
https://github.com/AngelesCahill/m8-evFinal-jwtNode.git

## RUTAS

### SIGNUP
method: POST

Por cada usuario: 

url: http://localhost:3000/api/signup

body:

{
    "firstName": "Angeles",
    "lastName": "Cahill",
    "email": "angeles.cahill@gmail.com",
    "password": "angeles123456"
}

{
    "firstName": "Mateo",
    "lastName": "Diaz",
    "email": "mateo.diaz@correo.com",
    "password": "mateo123456"
}

{
    "firstName": "Santiago",
    "lastName": "Mejias",
    "email": "santiago.mejias@correo.com",
    "password": "santiago123456"
}

{
    "firstName": "Lucas",
    "lastName": "Rojas",
    "email": "lucas.rojas@correo.com",
    "password": "lucas123456"
}

{
    "firstName": "Facundo",
    "lastName": "Fernandez",
    "email": "facundo.fernandez@correo.com",
    "password": "facundo123456"
}

### LOGIN / SIGNIN
method: POST

url: http://localhost:3000/api/signin

body:

{
    "email": "mateo.diaz@correo.com",
    "password": "mateo123456"
}

### CREAR UN BOOTCAMP
method: POST

Por cada bootcamp:

url: http://localhost:3000/bootcamp

body:
{
    "title": "Introduciendo El Bootcamp de React",
    "cue": 10,
    "description": "React es la librería más usada en JavaScript para el desarrollo de interfaces"
}

{
    "title": "Bootcamp Desarrollo Web Full Stack",
    "cue": 12,
    "description": "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS, Angular, MongoDB, ExpressJS"
}

{
    "title": "Bootcamp Big Data, Inteligencia Artificial & Machine Learning",
    "cue": 18,
    "description": "Domina Data Science todo el ecosistema de lenguajes y herramientas de Big Data e integrarlos con modelos avanzados de Artificial Intelligence y Machine Learning"
}

### AGREGAR UN USUARIO A UN BOOTCAMP
method: POST

Por cada usuario que queramos agregar a un bootcamp: 

url: http://localhost:3000/api/bootcamp/adduser

body:

{
    "bootcampId":1,
    "userId":2
}

{
    "bootcampId":1,
    "userId":3
}

{
    "bootcampId":2,
    "userId":2
}

{
    "bootcampId":3,
    "userId":2
}

{
    "bootcampId":3,
    "userId":3
}

{
    "bootcampId":3,
    "userId":4
}

### BUSCAR UN BOOTCAMP POR ID
method: GET

url: http://localhost:3000/api/bootcamp/1

### MOSTRAR TODOS LOS BOOTCAMPS
method: GET

url: http://localhost:3000/api/bootcamp

### MOSTRAR TODOS LOS USUARIOS
method: GET

url: http://localhost:3000/api/user

### BUSCAR UN USUARIO POR ID
method: GET

url: http://localhost:3000/api/user/1

### ACTUALIZAR NOMBRE Y APELLIDO DE UN USUARIO
method: PUT

url: http://localhost:3000/api/user/2

body:

{
    "firstName": "Mateo Actualizado",
    "lastName": "Diaz Actualizado"
}

### ELIMINAR USUARIO ID 4
method: DELETE

url: http://localhost:3000/api/user/4

