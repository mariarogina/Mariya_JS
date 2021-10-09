import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import topSalesReducer from "../reducers/topSales";
import catalogReducer from "../reducers/catalog";
import searchReducer from "../reducers/search";
import catalogItemReducer from "../reducers/catalogItem";
import cartReducer from "../reducers/cart";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { fetchCategoriesSaga } from "../reducers/catalog";
import { fetchTopSalesSaga } from "../reducers/topSales";
import { fetchItemSaga } from "../reducers/catalogItem";
import { fetchItemsSaga } from "../reducers/catalog";
import { fetchMoreSaga } from "../reducers/catalog";
import { fetchOrderSaga } from "../reducers/cart";
import { saveState } from "./localStorage";
import { loadState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  topSales: topSalesReducer,
  catalog: catalogReducer,
  search: searchReducer,
  catalogItem: catalogItemReducer,
  cart: cartReducer,
});

const rootSaga = function* rootSaga() {
  yield all([
    fetchCategoriesSaga(),
    fetchTopSalesSaga(),
    fetchItemSaga(),
    fetchItemsSaga(),
    fetchMoreSaga(),
    fetchOrderSaga(),
  ]);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

console.log(persistedState);

sagaMiddleware.run(rootSaga);

export default store;
