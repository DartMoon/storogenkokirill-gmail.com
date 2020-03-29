import {applyMiddleware, compose} from "redux";
const REACT_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhanceStore = (sagaMiddleware) => {
  return compose(
    REACT_DEVTOOLS,
    applyMiddleware(sagaMiddleware)
  );
};

export default enhanceStore;