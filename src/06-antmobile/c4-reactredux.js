import {React, useEffect, useState} from 'react'
import { connect } from 'react-redux'
import './default.css'
import IndexRouter from './router/IndexRouter'
import BottomBar from './component/Bottom_bar'

function App(props) {
  // useEffect(() => {
  //   console.log("useeffect01", props)
  //   return () => {
  //     console.log("useeffect02.props")
  //   }
  // }, [props])

  return (
    <div>
        <IndexRouter>
          {props.showBottomBar && <BottomBar></BottomBar>}
        </IndexRouter>
    </div>
  )
}

function mapStateToProps(state) {
  return { showBottomBar: state.BottomBarReducer.showBottomBar }
}

export default connect(mapStateToProps)(App)
