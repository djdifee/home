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


### Eslint
The project uses the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript). These rules
should be followed as thoroughly as possible, but if you have a strong opinion about some of the rules
you are welcome to raise the question about disabling certain rules.
To run the linter from the terminal, run ``npm run lint:js`` 

### Testing
Testing is done with the [Jest](https://jestjs.io/) testing framework. The tests can be run with the command
`npm run test`.
