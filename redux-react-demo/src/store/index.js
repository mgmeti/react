// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counter';
import authReducer from '../store/auth';


// Reducer function to manage a counter state
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
    
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter};
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }

//     return state;
// };

// Create a Redux store with the counter reducer
// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);
const store = configureStore( 
    {
        // single reducer
        // reducer: counterSlice.reducer
        // if multiptle reducers
        reducer: {
            counter: counterReducer,
            auth: authReducer
        }
    }
)

// export actions

export default store;
