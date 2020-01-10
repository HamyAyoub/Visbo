# Visbo

## Objectives

...

---

## Features

### React 16

### Webpack 4

### Babel 7 - transpiles JSX into JavaScript

### ESLint with Airbnb configuration

### Redux - used to take control of your application’s state

### Unit tests using Jest, Enzyme

### PropTypes

---

## Folder Structure

```
hello-world-react-webpack-babel-setup
|__
    actions
    build
    node_modules
    public
    src
    |__
        components
        |__
            App.js
            HelloWorld.js
            style.js
        containers
        reducers
        redux
        |__
            store.js
        routes
        services
        tests
        |__
            _snapshots_
            |__
               HelloWorld.test.js.snap
            testsSetup.js
            HelloWolrd.test.js
        types
        index.js
    .eslintrc.json
    .env
    config.js
    package.json
    package-lock.json
    README.md
```

---

## Usage

1. ```git clone https://github.com/alexandrakollarova/hello-world```
2. ```cd hello-world-react-webpack-babel-setup```
3. ```npm install``` && ```npm start```
4. visit [http://localhost:3000](http://localhost:3000)
5. test ```npm test```
6. build for production ```npm run build```

---

## Available Scripts in detail

### npm start

### npm test

### npm run build

### npm eject
