# CTSAvanzadosyFunciones
Curso de TypeScript: Tipos Avanzados y Funciones

## Configuración del proyecto con ts-node
  - Creamos nuestros archivos de gitignore y editorconfig
  - Para nuestro gitignore utilizaremos [gitignore.io](https://www.toptal.com/developers/gitignore)
  - Para nuestro editorconfig utilizaremos [editorconfig.org](https://editorconfig.org/)

  - Iniciamos nuestro proyecto con node
    ```
    $ npm init -y
    ```
  - Instalación de TypeScript forma local
    ```
    $ npm install typescript -D
    ```
  - Verificación de la instalación
    ```
    $ npx tsc --version
    ```
  - Inicializamos nuestro proyecto con TypeScript
    ```
    $ npx tsc --init
    ```
  - Para traspilar nuestro proyecto con TypeScript
    ```
    $ npx tsc --watch
    ```
  - Libreria de TypeScript para el proceso de compilación con [ts-node](https://typestrong.org/ts-node/)
    ```
    $ npm install @types/node --save-dev
    $ npx ts-node src/demo.ts
    ``` 

## Enums 
  Es una forma de definir un conjunto de valores que pueden ser utilizados en una sola variable.
  En TypeScript se puede definir un enum como una variable de tipo string.
  En el siguiente ejemplo definimos un enum con dos valores:
  ``` typescript
  enum Color {
    Rojo,
    Azul
  }
  ```
  Los enums funcionan como listas en las que podemos agregar llaves y valores. Esto lo que nos permite es tener un set de opciones predefinidas, evitando pasar un argumento invalido, ya que solo vamos a tener las opciones dentro del enum. Estos se usan de la siguiente manera:

  [Capacitor](https://capacitorjs.com/) es una libreria de Cordova que nos permite crear aplicaciones móviles y el uso de enums.
  Utilizaremos el plugin [@capacitor/camera](https://capacitorjs.com/docs/apis/camera) lo instalamos
  con el comando:
  ```
  $ npm install @capacitor/camera
  ```
  Example:
  ``` typescript
  import { Camera, CameraResultType } from '@capacitor/camera';

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;

    // Can be set to the src of an image now
    imageElement.src = imageUrl;
  };
  ```

## Tuples
  - Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos. Para hacer una tupla lo hacemos de la siguiente manera.
  - Las tuplas usualmente podemos tender a decir que son iguales a los tipos types si bien son “parecidas” no son iguales.
  - Ya que al definir un tipo, estamos definiendo los tipos que recibe esa variable, y al definir una tupla estamos definiendo el tipo que recibe un array justamente en la posición que lo estamos definiendo

  - [Basic Hooks de React](https://reactjs.org/docs/hooks-reference.html#usestate) usan tuplas.
  ```javascript
  const [state, setState] = useState(initialState);
  ```

## Unknown type
  Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. Unknown nos fuerza a hacer una verificación de tipo.
  ```typescript
  const myVariable: unknown = 'Hello';
  if (typeof myVariable === 'string') {
    console.log(myVariable.length);
  }
  ```
  Sabemos que para usar “cualquier tipo de dato” podemos usar el tipo any sin embargo, esto es peligroso ya que le indicamos que puede entrar cualquier tipo de dato.

  Es por ello que es una muy buena práctica utilizar el tipo de dato unknown ya que esta nos permite trabajar con cualquier tipo de dato pero en base al tipo de dato podemos asignarla a otra variable o realizar algo en especial.

## Never type
  El tipo de dato never, más que todo sirve para tipar a una función que nunca va a finalizar o sencillamente que pueda terminar el programa en el caso de lanar una excepción.
  ```typescript
  // esta funcion no tiene un punto final ya que dispara una excepcion
  function error(mensaje: string): never {
      throw new Error(mensaje);
  }
  ```

  Un ejemplo de ello es cuando queremos manejar un error o cuando ejecutamos un loop infinito, como por ejemplo una validación de un token de cada x’s segundos, que es una función que se ejecuta constantemente, ya que lanzas la función, esta envía el token lo valida, y comienza el timer para hacer el refresh de ese token, si hay un error lanza una excepción y si no continúa con la validación y el timer.
  ```typescript
  function myFunction(): never {
    throw new Error('Error!');
  }

    // esta funcion no tiene un punto final ya que dispara un error
  function fallo(): never {
      return error("Reportar fallo");
  }

  // esta funcion no finaliza ya que posee un loop infinito
  function loopInfinito() : never {
      while(true){}
  }
  ```

## Parámetros opcionales y nullish-coalescing
  Parámetros opcionales son aquellos que no son obligatorios, y si no se les pasa un valor, se asigna un valor por defecto.
  ```typescript
  function myFunction(parametroOpcional?: string): void {
    if (parametroOpcional) {
      console.log(parametroOpcional);
    } else {
      console.log('No hay parametro');
    }
  }
  ```
  En el ejemplo anterior, si no se le pasa un valor al parámetro, se asigna un valor por defecto.
  ```typescript
  function myFunction(parametroOpcional?: string): void {
    parametroOpcional = parametroOpcional || 'No hay parametro';
    console.log(parametroOpcional);
  }
  ```
  Nullish-coalescing es un operador que nos permite asignar un valor por defecto a una variable si no se le pasa un valor.
  ```typescript
  function myFunction(parametroOpcional?: string): void {
    const parametro = parametroOpcional ?? 'No hay parametro';
    console.log(parametro);
  }
  ```

## Parámetros por defecto
  Parámetros por defecto son aquellos que no son obligatorios, y si no se les pasa un valor, se asigna un valor por defecto.

## Parámetros rest
  Se apoya en la flexibilidad que tenemos en JavaScript de enviar parámetros sin ningún problema, que no tienen un fin.

  Rest parameters nos permite mandar un conjunto de argumentos a nuestra función y ella los recibe como un arreglo.

  ### Spread operator
  A demás de usarlo en poder copiar objetos, también podemos usarlo para poder recibir N parámetros en una función, además vamos a recibir esos parámetros como un array de argumentos.

  - Sintaxis en JavaScript
  ```javascript
  function functionName (...parameters) {
	  statements
  }
  ```
  - Sintaxis en TypeScript
  ```typescript
  function functionName (...parameters: dataType[]) {
	  statements
  }
  ```

## Sobrecarga de funciones: el problema
  Cuando tenemos una función que retorna más de un solo tipo de dato y a ese resultado lo queremos utilizar en otra parte de nuestro programa, no vamos a poder usarlo como tal, ya que TypeScript no sabe que tipo de dato se retornó realmente.

  TypeScript al no saber el tipo de dato que se retornó en una función que puede retornar más de un tipo de dato, somos nosotros los responsables en decirle el tipo de dato resultante de la función para así poder operar con el resultado de forma normal.

  ### Uso de la sobrecarga de funciones
  Se suele emplear mucho en librerías, pero depende mucho de tu proyecto y de las ventajas que te puede llegar a dar.

  La sobre carga de funciones únicamente suelen darse con las funciones declarativas con la palabra reservada function.
  ```typescript
  function suma(a: number, b: number): number {
    return a + b;
  }
  function suma(a: number, b: number, c: number): number {
    return a + b + c;
  }
  ```

## Sobrecarga de funciones: la solución
  En conclusión, lo que vamos a hacer es escribir de nuevo la función con los parámetros y su tipo de dato de retorno antes de declarar la función como tal, para que de esa forma TS sepa en que casos se retorna cierto valor. Se que no le entendiste, veamos un ejemplo.
  ```typescript
  function suma(a: number, b: number): number;
  function suma(a: number, b: number, c: number): number;
  function suma(a: number, b: number, c?: number): number {
    if (c) {
      return a + b + c;
    } else {
      return a + b;
    }
  }
  ```
  [TypeORM](https://typeorm.io/)

  ### Buenas prácticas
  - Cuando tengamos sobre carga de métodos y por alguna razón tengamos un unknown o any, en esa sobre carga, lo mejor es dejar ese unknowno any al final. Caso contario no funcionará correctamente esa aserción de tipos y por ende el autocompletado del editor.
  ![](https://static.platzi.com/media/user_upload/1-b017dd75-e4ad-4551-b09a-e4973291f829.jpg)
  - Evaluar si realmente se necesita una sobre carga o simplemente puedes buscar otra forma de hacerlo como ser usando valores opcionales.
  ![](https://static.platzi.com/media/user_upload/2-5273274e-7f1d-478d-b369-98ddda7ccad6.jpg)
  ![](https://static.platzi.com/media/user_upload/3-de869952-ef8f-466c-be14-c6ec7620346a.jpg)
  ![](https://static.platzi.com/media/user_upload/4-698c2d2e-b287-4727-beac-1e5c44c8fa2a.jpg)
  ![](https://static.platzi.com/media/user_upload/5-5f0ead6f-e36b-42b1-b25b-6bb7cc2f15df.jpg)

## Interfaces
  Es una forma interesante de trabajar con los objetos y clases. Lo podemos usar de la misma manera que los types.
  ### Diferencias entre type e interface
  - Con type yo puedo definir tipos primitivos o directos (declaraciones cortas y puntuales), mientras que una interface necesita todo un cuerpo.
  - A interface lo usamos para un conjunto de atributos de valores.
  - Interface tiene la particularidad de que se puede extender, mientras que los type no.
  - Interface tiene la particularidad de que se puede heredar, mientras que los type no.
  ```typescript
  interface interfaceName {
	statements
  }
  ```

