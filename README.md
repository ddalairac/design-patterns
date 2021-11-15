# Design patterns
Design patterns examples in JS


# Javascript Patrones
Callback: función que recibe como parametro puntero a otra funcion


## Creación
- Class: Is a blueprint for creating objects
- Constructor class: Extends another class and inherited their properties
- Singleton: Always return the same instance 
- Factory: Is a function (or class method) that returns an object

## Estructurales
- Module: encapsular un bloque de código.<br>
(Elemento con función propia concebido para poder ser agrupado de distintas maneras con otros elementos constituyendo una unidad mayor).
JS Module Systems:
  - CommonJS
  - AMD: Async Module Definition 
  - UMD: Universal Module Definition
  - ECMAScript Harmony (ES6)
- Mixin: Agrega una funcionalidad a una clase existente
- Facade:
- Flyweight: is similar to a singleton. Sis e descarga una imagen, va a retornar la imagen que ya se descargo, para no realizar la operación de nuevo.
- Decorator: El objetivo (al igual que el mixin) es agregar funcionalidad a una clase. En la práctica, es similar a heredar de otra clase.
- MVC (Model View Controller):<br>
La vista tiene acceso al controller y al modelo
- MVP (Model View Presenter):<br>
La vista tiene acceso solo al presenter, y este tiene acceso al modelo.
- MVVM (Model View View Model):<br>
Modelo, vista/modelo (estado), view (stateless) 

## Comportamiento