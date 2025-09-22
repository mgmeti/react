// import redux in nodejs format
const redux = require('redux');

// reducer function
const counterReducer = (state = { counter: 0 }, action) => { 
    // check action type and update state accordingly
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
    
    return state;
  
};

// create store with reducer
const store = redux.createStore(counterReducer);

// subscribe function
const counterSubscriber = () => { 
    const localState = store.getState();
    console.log(localState);
};

// subscribe to the store
store.subscribe(counterSubscriber);

// dispatch action (type should be unique)
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' }); 
