import {createStore, combineReducers, applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import BottomBarReducer from './Reducer/BottomBarReducer'
import CityReducer from './Reducer/CityReducer'
import TestReducer from './Reducer/TestReducer'
import GetTheaterReducer from './Reducer/GetTheaterReduce'
import GetFilmsReducer from './Reducer/GetFilmsReducer'

const persistConfig = {
    key: "06-antmobile",
    storage, //不变的
    whitelist: ['CityReducer']
}

const reducer = combineReducers({
    BottomBarReducer,
    CityReducer,
    TestReducer,
    GetTheaterReducer,
    GetFilmsReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer,  applyMiddleware(reduxPromise))
let persistor = persistStore(store)


export   { store, persistor }



