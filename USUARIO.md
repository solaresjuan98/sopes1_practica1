
# MANUAL USUARIO

![1](./images/banner.png)

![1](./images/banner2.png)

## Descripción de la practica:

<p>
La practica consiste en una calculadora sencilla desarrollada en React con TypeScript, en la cual se realizan las cuatro operaciones aritmeticas básicas (suma, resta, multiplicación, división), que son registradas en una base de datos de <b>mongodb</b> para tener un log de cada operacion realizada (operandos, operador, resultado y fecha de operación).

Se utilizaron volumenes en docker para poder desplegar la arquitectura y exista persistencia de datos, es decir que al momento de parar los contenedores y volverlos a encender no exista perdida de datos.
</p>


### Requisitos minimos
| Navegador | Google Chrome, Microsoft Edge, Brave, etc  |
|:-:|---|
| Sistema operativo  |   Windows 10/11, Linux, MAC OS |
| Lenguaje de programación (frontend): | Javascript / TypeScript  |
| Lenguajo de programación (backend): |  Golang 1.16.17 |
| Base de datos |  Mongodb |



# Vista de la aplicación

![1](./images/front.png)

## Funcionalidades básicas
* <b>Calculadora:</b> Realiza operaciones aritmeticas (suma, resta, multiplicación, división)
* <b> Guardar Resultado: </b> Almacenar la operacion en la base de datos
* <b> Tabla de resultados: </b> Se muestra el detalle de todas las operaciones realizadas
* <b> Actualizar resultados: Al presionar el boton se refrescan los registros almacenados en la base de datos.  </b>


# ¿Como ingresar a la aplicación?
<p>
Hay dos formas de acceder a la aplicación, dependiendo la ubicación del host, ya sea local o en una maquina virtual ubicada en cualquier servidor de la nube (Azure, Google Cloud Platform, AWS o cualquier otro proveedor).
</p>

### Interfaz gráfica

```
    localhost:3000 
    <direccion_ip>:3000
```

### Endpoints Servidor

```
    # Guardar operación (POST)
    host:5000/insertResult 
    
    # Obtener operacion (GET)
    host:5000/operation/:resultId

    # Obtener operaciones (GET)
    host:5000/operations

    
```
