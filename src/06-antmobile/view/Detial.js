import {React, useEffect} from 'react'
import { connect } from 'react-redux'
import {hideBottomBar, showBottomBar} from "../Redux/Action/BottomBarAction";



function Detial(props) {
  useEffect(() => {
    console.log("@Detail 发送请求")
    props.hideBottomBar()
    // store.dispatch({type:"hideBottomBar"})
    return() => {
      console.log("@Detail 页面销毁")
      props.showBottomBar()
    }
  }, [])


  return (
    <div>
        <button onClick={()=>{props.showBottomBar()}}> 设置 </button>
        {props.match.params.filmid}
        Detial
    </div>
  )
}

export default connect(null, {hideBottomBar, showBottomBar})(Detial)
