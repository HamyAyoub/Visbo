# hello-world-react-webpack-babel-setup

## Features

### React 16

* Dependencies:
* React
* ReactDOM

### Webpack 4

* Main components:
* webpack - main engine of webpack plugin for its dependents to work
* webpack-cli - to access webpack commands through CLI (think npm start, npm build..)
* webpack-dev-server - client-side development server
* html-webpack-plugin - helps creating HTML templates

### Babel 7 - transpiles JSX into JavaScript

* Main components:
* babel-core - transforms ES6 code into ES5
* babel-preset-env - determines the plugins to use and provides modern functionality on older browsers that do not natively support it
* babel-preset-react - preset for all React plugins
* babel-loader - communicates with webpack

### ESLint with Airbnb configuration

### Redux - used to take control of your application’s state

### Unit tests using Jest, Enzyme

### PropTypes

## Optional

* Follow Airbnb Styleguide practices for React
* Add React Dev Tools
* Add Redux Dev Tools - allows you to see, play back, and change your action history

## Installation

1. ```git clone https://github.com/alexandrakollarova/hello-world```
2. ```cd hello-world-react-webpack-babel-setup```
3. ```npm install``` && ```npm start```
4. visit [http://localhost:3000](http://localhost:3000)
5. build for production ```npm run build```

## Available Scripts in detail

* npm start
* Webpack parses through the app starting at src/index.js, following any imported modules, until it has a complete dependency graph which then will be used to create a single JS file consisting of the app source code and modules used by the app, injects the file via script tag into public/index.html, and starts a development server on <http://localhost:3000>
* npm test
* * Jest testing framework handles unit testing here and it starts the test runner in 'watch' mode
* npm build
* * Webpack creates an optimized, production-ready bundle of the app, generates a new folder & files (./build/). The bundle created from this configuration has the source code minified and compressed for performance benefits and it also generates source maps
* npm eject
* * calling this command will remove the settings and all the nice stuff create-react-app provides for you
