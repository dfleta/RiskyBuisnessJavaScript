# Proyecto de Risky Buisness

Este proyecto simula una fiesta organizada por el ser orgánico más inteligente de todo el multiverso, Rick Sanchez. Como es de esperar, nuestro anfitrión quiere distribuir una serie de productos para que a sus invitados no les falte de nada. Pero Rick también quiere obtener beneficios de ello, y para cada producto a distribuir hay una lógica de negocio.

## Estructura del proyecto

El proyecto consta de estos módulos:

1. creditCard -> tarjeta que usaran los invitados para poder adquirir todos los servicios.
2. ufosPark -> ofrece naves espaciales disponibles.
3. crystalExpender -> ofrece cristales espaciales que animan la fiesta.
4. rickMenu -> ofrece un menú para cuando los invitados ya no tengan cristales
5. receptive -> automatiza los servicios.

Cada uno de estos módulos forma parte de un modo u otro de la lógica de negocio del proyecto. Dentro de estos módulos hay un Script JavaScript que ejecuta la lógica y un directorio para testear que dicha lógica funcione correctamente.

6. db -> este directorio contiene json's para poder mockear las Api's.

Para poder manipular las dependencias entre módulos hemos usado Npm como framework.

## Historias de usario

Las historias de usuario, es decir, el main imprime por pantalla toda la lógica de cada uno de los módulos comentados. El main crea los objetos a partir de los mocks dentro del módulo db.

## Desarrollo del proyecto

Todo el proyecto ha sido desarrollado con JavaScript. Hemos seguido una metodología basada en Sprints. Al no tener conocimientos previos de JavaScript, asolíamos conocimientos útiles para el proyecto y los aplicabamos si lo considerabamos necesario. 

También hemos usado metología Scrum para poner en común todos los conflictos que iban surgiendo. 

También hemos usado alguna referencia de Git Flow. A la master no se le hacía ningún commit directamente. La rama principal era development, y cada cambio o implementación nueva se creaba otra rama a partir de esta. Al terminar se hacía un pull request a development. Finalmente se ha hecho un pull request a la master de development.

### Incidencias

Al primero subir todos los módulos y luego subir los ficheros .gitignore y .npmignore, se pueden ver ficheros y directorios de configuración de npm en el repositorio remoto.
