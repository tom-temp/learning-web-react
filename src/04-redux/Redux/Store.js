import {createStore, combineReducers} from 'redux'
import BottomBarReducer from './Reducer/BottomBarReducer'
import CityReducer from './Reducer/CityReducer'

const reducer = combineReducers({
    BottomBarReducer,
    CityReducer
})

const store = createStore(reducer)
export default store



