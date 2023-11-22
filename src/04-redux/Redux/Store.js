import {createStore, combineReducers, applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise'
import BottomBarReducer from './Reducer/BottomBarReducer'
import CityReducer from './Reducer/CityReducer'
import TestReducer from './Reducer/TestReducer'
import GetTheaterReducer from './Reducer/GetTheaterReduce'

const reducer = combineReducers({
    BottomBarReducer,
    CityReducer,
    TestReducer,
    GetTheaterReducer
})

const store = createStore(reducer, applyMiddleware(reduxPromise))
export default store



