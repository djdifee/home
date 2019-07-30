![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)

## React Redux-Saga boilerplate

Boilerplate to get started using React with Redux-Saga.

### Deployment
```
    ... clone repository ...
    npm install
    npm start
```

### How to start working on a feature
```
    git checkout master
    git pull
    git checkout -b add-feature-x
    ... do changes ...
    git commit -a -m "detailed commit message"
    git status
    ... verify that correct files are included ...
    git push -u origin add-feature-x
    ... create pull-request to master ...
```

It is recommended to use the [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) plugin
to easier debug the state of the application. The store is already set up to support this, so all you need to
do is to download the extension. 

## Development

The project follows certain style guides and principles that are recommended. 

### Project structuring

```
build/                       web app production build
config/                      config for jest
coverage/                    generated report when doing code coverage
public/                      tools for browser; favicon, manifest etc
src/                         project source code
|- media/                    accessable media files
|  +- ...                    additional structuring of media files
|- scripts/                  scipts
|  |- components/            reusable components
|  |- screens/               available routes
|  |- service/               service scripts
|     |- actions/            redux actions
|     |- reducers/           redux reducers
|     |- sagas/              redux-saga
|     |- constants.js        gathering actions, reducers and sagas into single export constants
|  |- tests/                 test directory
|     |- ...                 setup files and sub directories
|  |- utils/                 helper scripts, can be anything from styling to data processing
|  +- ...                    setup files for React
+- ...                       index.html and service worker setup
.eslintrc                    config for eslint
.stylelintrc                 config for stylelint
babel.config.js              config for Babel
jest.config.js               config for jest
webpack.config.js            config for webpack
```

### Eslint
The project follows the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript). These rules
should be followed as thoroughly as possible, but if you have a strong opinion about some of the rules
you are welcome to raise the question about disabling certain rules.
To run the linter from the terminal, run ``npm run lint:js`` 

### Stylelint
The project follows the [standard Stylelint config](https://github.com/stylelint/stylelint-config-standard) with
a few minor tweaks. Look in the [.stylelintrc](.stylelintrc) to make yourself known with these tweaks. 
The project uses [styled-components](https://www.styled-components.com/) for styling. This is to encourage writing 
single file components. 

### Testing
Testing is done with the [Jest](https://jestjs.io/) testing framework. The tests can be run with the command
`npm run test`.
