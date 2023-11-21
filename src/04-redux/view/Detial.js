import {React, useEffect} from 'react'
import store from '../Redux/Store'
import {hideBottomBar, showBottomBar} from "../Redux/Action/BottomBarAction";



export default function Detial(props) {
  useEffect(() => {
    console.log("@Detail 发送请求")
    store.dispatch(hideBottomBar())
    // store.dispatch({type:"hideBottomBar"})
    return() => {
      console.log("@Detail 页面销毁")
      store.dispatch(showBottomBar())
    }
  }, [])


  return (
    <div>
        {props.match.params.filmid}
        Detial
    </div>
  )
}
