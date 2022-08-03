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
