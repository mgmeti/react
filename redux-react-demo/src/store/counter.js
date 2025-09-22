import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// Create a slice of the Redux store
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It detects changes to a "draft state" and produces a brand new immutable state based off those changes
            state.counter++;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});
export const {increase, increment, decrement, toggle } = counterSlice.actions;
export default counterSlice.reducer;
