'use strict';

var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var reducer = require('./reducer');

var initialState = 'John';

var logger = function(value) {

    console.log('value: ', value);

    return function(next) {
        // will be given the next middleware’s dispatch method, 
        // and is expected to return a function of action calling next(action)
        console.log('next: ', next);
        return function(action) {
            console.log('action: ', action);
            // Call the next dispatch method in the middleware chain.            
            console.log('state after dispatch: ', value.getState());
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return next(action);
        };
    };
};

var store = createStore(reducer, initialState, applyMiddleware(logger));
console.log('state should be John: ', store.getState() === 'John');

// dispatch an action
store.dispatch({
    type: 'SET_NAME',
    name: 'Marie Ann'
});
console.log('state should be Marie Ann: ', store.getState() === 'Marie Ann');
