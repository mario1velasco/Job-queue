# JobQueue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Funcionamiento

El proyecto esta formado por un modelo, dos componentes y tres servicios

## Modelo

Se llama job.model.ts y es el que guarda la información de cada trabajo

## Componentes

- Index component

Formado por 3 arrays de tipo Job (modelo) que gestionan los trabajos
Dos input con los que seleccionas el numero de hilos y los trabajos que quieres crear

- Pending component

Es un componente reutilizable, que esta basado en una ventana que al abrir muestra los trabajos que actualmente estan en la cola en el momento de su selección (para ver cambios debes volver a cargar la vista)

## Servicios

- Pending Service

Se encarga de inicializar la cola de pendientes asignado un nombre Random

- Running Service

Se encarga de realizar la tareas, calcula el tiempo que le llevara ejecutarse y mediante una promesa se queda esperando ese tiempo. Una vez acabado avisa a Index component para que actualize las colas.

- Finished Service

Indica si la tarea se ejecuto correctamente


## Mejoras a realizar

Añadir y eliminar el tiempo real los elementos mostrados en la tabla sin necesidad de recargar otra vez la tabla
Añadir efectos CSS para que la visualización sea mas satisfactoria
Añadir más funcionalidades en los servicios
Usar el patrón comando