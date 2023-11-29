import {React, useEffect, useState, useMemo} from 'react'
import { connect } from 'react-redux'
import { test } from '../Redux/Action/TestAction'
import { getTheaterAction } from '../Redux/Action/GetTheaterAction'

function Theater(props) {

  useEffect(() => {
    if (props.theaters.length===0) {
      console.log("=0")
      props.getTheaterAction()
    } else {
      console.log(">0")
    }
    console.log("@Theater 订阅外: CityReducer", props.city)
  }, [])

  return (
    <div>
      {console.log('渲染theater')}
      <div style={{background:"antiquewhite", height:"30px", lineHeight:"30px"}}>
        <span style={{float:"left"}} onClick={()=>props.history.push(`/theater/city`)}>{props.city}</span>
        <button onClick={()=>{props.test()}}>测试</button>
        <button style={{float:"right"}} onClick={()=>{props.history.push(`/theater/search`)}}>🔍</button>
      </div>

      {props.theaters.map(item=>
      <li key={item.cinemaId}>
        <div style={{fontSize:"18px", marginTop:"2px"}}>{item.name}</div>
        <div style={{fontSize:"13px", marginBottom:"2px"}}>{item.address}</div>
      </li>)}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    theaters:state.GetTheaterReducer.theatersList,
    city:state.CityReducer.city
  }
}


export default connect(mapStateToProps, {getTheaterAction, test})(Theater)
