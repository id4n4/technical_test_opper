# Technical test OPPER

## Importar la BD 

Importar base de datos vehiculo_db en su propia base de datos utilizando la herramienta de línea de comandos "mysql" o una herramienta gráfica como "phpMyAdmin"

## Instalar dependencias tanto en .\client como .\server
```
npm install
```

### Modificar ruta de conexion a la BD .\server\src\app.module.ts
```
TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      database: 'vehiculo_db',
      username: '<username>',
      password: '<password>',
      autoLoadEntities: true
    }),
```

### Montar servidor de APIs en .\serve
```
npm run start
```

## Posible error de conexión con base de datos 

MySQL 8.0 - Client does not support authentication protocol requested by server

Ejecuta este query en tu base de datos para solucion

```
ALTER USER '<username>'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>';
flush privileges;
```

### Montar servidor cliente
```
npm run serve 
```

### Ingresar a tu navegador web localhost:8080
![alt text](https://imgur.com/a/i7rlUiI)

