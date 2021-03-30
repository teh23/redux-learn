import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import PostReducer from "./reducers/PostReducer";

const reducers = combineReducers({
    posts : PostReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store