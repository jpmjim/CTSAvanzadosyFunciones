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
