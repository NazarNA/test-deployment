import { combineReducers, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import hotelsReducer from './reducers/hotelsReducer';
import ProductsReducer from './reducers/productsReducer';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

const rootReducer = combineReducers({
  products: ProductsReducer,
  hotels: hotelsReducer
});

const sagaMiddleware = createSagaMiddleware();

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
