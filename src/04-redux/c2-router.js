import {React, useEffect, useState} from 'react'
import './default.css'
import IndexRouter from './router/IndexRouter'
import store from './Redux/Store'
import BottomBar from './component/Bottom_bar'

export default function App() {

  const [BottomBarShow, setBottomBarShow] = useState(true)
  useEffect(() => {
    store.subscribe( ()=>{
      console.log("@App 订阅中: showBottomBar", store.getState().BottomBarReducer.showBottomBar)
      setBottomBarShow(store.getState().BottomBarReducer.showBottomBar)
    } )
    return (
      console.log("@App 销毁Store")
    )
  }, [])

  return (
    <div>
      {/* C1_router_do */}
        <IndexRouter>
          {BottomBarShow && <BottomBar></BottomBar>}
        </IndexRouter>
    </div>
  )
}
