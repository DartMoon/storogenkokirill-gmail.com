import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'

import enhanceStore from "./configuration";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    enhanceStore(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;