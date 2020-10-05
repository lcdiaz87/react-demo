import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import newsReducer from "./../reducers/newsReducer";
import taskReducer from "./../reducers/taskReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    newsStore: newsReducer,
    taskStore: taskReducer
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
