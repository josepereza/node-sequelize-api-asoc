# node-sequelize-api-asoc
Api con node -sequelize -mysql y una simple asociacion de 1:n - hasMany / belongTo
simple asociacion de 1:n  - hasMany / belongTo

Globally

Install CLI globally with
```ruby
$ npm install -g sequelize-cli
$ sequelize db:drop
$ sequelize db:create
$ sequelize db:migrate
$ sequelize db:seed:all
$ npm start
```
** Hay realizar todos estos procesos para inicializar las tablas.Con estos procesos
** primero inicializamos  la tabla Usuarios y despues la tabla Tareas.

Este seria un ejemplo de un listado completo de usuarios con todas sus tareas:
http://miip:3000/usuarios/lista_completa

![Alt text](sequelize-api.png)

Este es un listado simple de tareas :
http://miip:3000/tareas/listado

![Alt text](sequelize-api2.png)
