import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware();
let middlewares = [];
middlewares = [...middlewares, sagaMiddleware];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);
