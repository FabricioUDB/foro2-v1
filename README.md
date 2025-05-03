# Foro2-v1
 DPS UDB 2025

**Login Screen con React Native Web y Firebase Auth**

Este proyecto proporciona:

* Una pantalla de login/registro en React Native Web.
* Bundle optimizado con Webpack + Babel.
* Autenticación con Firebase (Email/Password + Google Sign-In).

---

## 🛠 Prerrequisitos

* **Node.js** v14 o superior y **npm** v6+ (instala desde [https://nodejs.org](https://nodejs.org))
* **Visual Studio Code** (IDE recomendado)

  * Extensiones sugeridas:

    * ESLint
    * Prettier
    * React Native Tools
* (Opcional) **Yarn** en lugar de npm: `npm install -g yarn`

---

## 💻 IDE y configuración recomendada

En VS Code, puedes crear `.vscode/launch.json` para debug React Native Web:

```jsonc
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Web",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

Y en `.vscode/settings.json`:

```jsonc
{
  "editor.formatOnSave": true,
  "files.exclude": { "node_modules/": true },
  "javascript.validate.enable": false
}
```

---

## 🔧 Instalación y dependencias

Desde la raíz del proyecto:

```bash
# Clona y entra al directorio
git clone https://github.com/CescPerdomo/foro2-v1.git
cd foro2-v1

# Instala dependencias principales
npm install

# Instala dev-dependencies
npm install --save-dev \
  webpack webpack-cli webpack-dev-server html-webpack-plugin \
  babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript \
  module:metro-react-native-babel-preset \
  @babel/plugin-proposal-class-properties @babel/plugin-transform-private-methods \
  @babel/plugin-transform-private-property-in-object babel-plugin-module-resolver \
  gh-pages
```

**Dependencias del proyecto**:

```jsonc
"dependencies": {
  "firebase": "^9.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-native": "^0.71.x",
  "react-native-web": "^0.19.x"
}
```

**DevDependencies clave**:

```jsonc
"devDependencies": {
  "webpack": "^5.x",
  "webpack-cli": "^5.x",
  "webpack-dev-server": "^4.x",
  "html-webpack-plugin": "^5.x",
  "babel-loader": "^9.x",
  "@babel/preset-env": "^7.x",
  "@babel/preset-react": "^7.x",
  "@babel/preset-typescript": "^7.x",
  "module:metro-react-native-babel-preset": "^0.x",
  "@babel/plugin-proposal-class-properties": "^7.x",
  "@babel/plugin-transform-private-methods": "^7.x",
  "@babel/plugin-transform-private-property-in-object": "^7.x",
  "babel-plugin-module-resolver": "^4.x",
  "gh-pages": "^4.x"
}
```

---

## ⚙️ Configuración de Webpack

Archivo: `webpack.config.js`

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.web.js'),
  output: {
    path: path.resolve(__dirname, 'web-build'),
    filename: 'bundle.web.js',
  },
  resolve: {
    alias: { 'react-native$': 'react-native-web' },
    extensions: ['.web.ts', '.web.tsx', '.ts', '.tsx', '.web.js', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './web/index.html' }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'web'),
    hot: true,
    port: 8080,
  },
};
```

---

## 📝 Babel Config

Archivo: `babel.config.js`

```js
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ['module-resolver', { alias: { 'react-native$': 'react-native-web' } }]
  ]
};
```

---

## 🔌 Firebase Config

Archivo: `src/config/firebase.js`

```js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = { /* tu configuración */ };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export function login(...) { /* ... */ }
// etc.
```

---

## 🧪 Credenciales de prueba

* **Email:** [pruebareact2025@gmail.com](mailto:pruebareact2025@gmail.com)
* **Password:** Prueba2025\$

## 🗂 Estructura de carpetas

```
foro2-v1/
├─ assets/
│  └─ images/
│     └─ google-logo.png
├─ src/
│  ├─ components/
│  │  ├─ FormInput.js
│  │  └─ GoogleButton.js
│  ├─ config/
│  │  └─ firebase.js
│  ├─ screens/
│  │  └─ LoginScreen.js
│  ├─ styles/
│  │  └─ LoginScreen.styles.js
│  └─ App.js
├─ web/
│  └─ index.html
├─ index.web.js
├─ webpack.config.js
├─ babel.config.js
├─ package.json
├─ README.md
└─ .gitignore
```

---

## ▶️ Scripts NPM

```jsonc
"scripts": {
  "web": "webpack serve --config webpack.config.js --mode development",
  "build": "webpack --config webpack.config.js --mode production",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d web-build"
}
```

---

## 🚀 Deploy en GitHub Pages

1. Configura `homepage` en `package.json`:

   ```json
   "homepage": "https://CescPerdomo.github.io/foro2-v1",
   ```
2. `npm install --save-dev gh-pages`
3. `npm run deploy`

---Integrantes
José Alonso Aguirre Márquez AM241838 
Fabricio Antonio Castro Martinez cm240137
Cesar Ernesto Perdomo Guerrero PG241690
Victor Fabricio Mendez Menjivar MM242458 
Carlos David Guevara Martinez GM172474




