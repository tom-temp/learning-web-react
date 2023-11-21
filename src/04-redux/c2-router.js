import {React, useEffect, useState} from 'react'
import BottomBar from './component/Bottom_bar'
import IndexRouter from './router/IndexRouter'
import './default.css'
import store from './Redux/Store'



export default function App() {

  const [BottomBarShow, setBottomBarShow] = useState(true)
  useEffect(() => {
    store.subscribe( ()=>{
      console.log("@App 订阅数值发生改变: showBottomBar", store.getState().BottomBarReducer.showBottomBar)
      setBottomBarShow(store.getState().BottomBarReducer.showBottomBar)
    } )
    return (
      console.log("@App 销毁Store")
    )
  }, [])

  return (
    <div>C1_router_do
        <IndexRouter>
          {BottomBarShow && <BottomBar></BottomBar>}
        </IndexRouter>
    </div>
  )
}
