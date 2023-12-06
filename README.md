# coffee-house
Training task react+typescript+sass

1. npm init -y
2. npm install --save-dev webpack webpack-cli
3. npm install --save-dev typescript ts-loader @types/react
4. create webpack.config.js
5. for ESM add "type": "module" to package.json
6. ReferenceError: __dirname is not defined in ES module scope *can be treated by
   import {fileURLToPath} from 'url';
   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);
7. create tsconfig.json
   (now webpack can assemble empty bundle)
8. npm install --save-dev sass-loader sass css-loader style-loader
9. npm install --save-dev babel-loader @babel/core @babel/preset-env
10. npm install webpack-dev-server --save-dev
11. npm install html-webpack-plugin --save-dev
12. npm install react react-dom react-router-dom
13. npm install @types/react @types/react-dom @types/react-router-dom --save-dev # for TypeScript
14. npm install copy-webpack-plugin --save-dev
15. for aliases
    //tsconfig.json
    "paths": {
      "@assets/*": ["./src/assets/*"],
      "@components/*": ["./src/components/*"],
      "@pages/*": ["./src/pages/*"],
      "@services/*": ["./src/services/*"],
      "@store/*": ["./src/store/*"],
      "@utils/*": ["./src/utils/*"],
    },
    //webpack.config.js
   resolve: {
    ...
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },

