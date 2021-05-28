import { createStore } from 'redux';

// Action Generators - Functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

//
// Reducers
// Reducers are PURE functions
// Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

//Watch for changes - call unsub to stop watching
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


//ACTIONS
// increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//reset the count
store.dispatch(resetCount());

//decrement the count
store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));