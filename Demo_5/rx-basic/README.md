Ejemplo básico para establecer una plantilla básica de contenido estático
utilizando Webpack y TypeScript.

Requisitos previos
! No se recomienda hacer la instalación global de webpack

----------------------------------------------------------------------------------
- Crear uan nueva carpeta para el proyecto.
- Ejecutar dentro de la carpeta los siguiente comandos.

yarn init -y
yarn add --dev webpack webpack-cli webpack-dev-server
yarn add --dev typescript ts-loader 
./node_modules/typescript/bin/tsc --init

- Modificar el archivo tsconfig.json. Cambiar el valor del parámetro
"outDir": "./dist/". Con esto el resultado de la "compilación" de TypedScript
queda en la carpeta "dist".

- Cree el archivo webpack.config.js, utilice como base del contenido
del archivo el siguiente código. Este permite la "compilación" código
de TypedScript al ejecutar a webpack.

var path = require("path");

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    stats: {
      assets: false,
      hash: false,
      chunks: false,
      errors: true,
      errorDetails: true,
    },
    overlay: true
  }
};

- Agregar a las dependencias rxjs

yarn add rxjs 

- Cree un nuevo archivo ./src/index.ts. Y agregue el siguiente contenido.

import { Observable, of } from 'rxjs';

console.log('rx-basic ready!');

- Cree un nuevo archivo index.html en la raíz de la carpeta. Utilice el siguiente
contenido.

<html>
  <head>
    <title>rx-basic</title>
  </head>
  <body>
    <script src="dist/bundle.js"></script>
  </body>
</html>

----------------------------------------------------------------------------------

Referencia
https://webpack.js.org/guides/installation/#global-installation
https://github.com/jonaskello/typescript-webpack-minimal
https://webpack.js.org/guides/typescript/

"scripts": {
	"build": "webpack --config webpack.config.js"
}