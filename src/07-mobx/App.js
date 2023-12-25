import React from 'react'
import './default.css'
import { useEffect, useState } from 'react'
import BottomBar from './component/Bottom_bar'
import IndexRouter from './router/IndexRouter'
import store from './mobx/store'
import { autorun } from "mobx";

export default function App() {

    const [isShowTabbar, setIsShowTabbar] = useState(true)
    useEffect(() => {
      console.log("useffect", store.isShowTabbar)
      var unscribe = autorun(()=>{setIsShowTabbar(store.isShowTabbar)})
        return()=>{unscribe()   }

    }, [])


  return (
    <div>App

        <IndexRouter>
        {isShowTabbar && <BottomBar></BottomBar>}
        {/* <BottomBar></BottomBar> */}
        </IndexRouter>

    </div>
  )
}
