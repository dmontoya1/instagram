import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimary from './Sagas/Sagas';

const reducerTest = (state = [0], action) => {
  switch (action.type) {
    case 'ADD_REDUCER_TEST':
      return [...state, 1];
    default:
      return state;
  }
};


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerTest,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimary);

export default store;
