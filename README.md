# applyMiddleware
redux studies applyMiddleware

***way to extend Redux with custom functionality.***

## Clone the repo & install
```
git clone https://github.com/suxxuscomp/applyMiddleware.git
cd ./applyMiddleware
npm install
```
## Usage
cd ./src/scripts

**node index.js**

## Tips
* lets you wrap the store’s dispatch method.
* ex:[redux-thunk](https://github.com/gaearon/redux-thunk) lets the action creators invert control by dispatching functions.
* middleware is not baked into createStore and is not a fundamental part of the Redux architecture.
* each middleware receives Store’s dispatch and getState functions as named arguments, and returns a function.

## Links
[Middleware](http://redux.js.org/docs/api/applyMiddleware.html)
