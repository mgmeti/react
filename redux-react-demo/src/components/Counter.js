import { useSelector, useDispatch } from 'react-redux';

import  { increase, increment, decrement, toggle }  from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // useSelector allows you to extract data from the Redux store state
  // it will automatically subscribe to the Redux store and run your selector whenever an action is dispatched
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  
  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(increment());
  };

  const increaseandler = () => {
    // dispatch({ type: 'increase', amount: 5 });
    dispatch(increase(5));
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(decrement());
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
         <button onClick={increaseandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
