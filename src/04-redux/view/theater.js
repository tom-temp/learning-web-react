import {React, useEffect, useState, useMemo} from 'react'
import store from '../Redux/Store'
import { test } from '../Redux/Action/TestAction'
import { getTheaterAction } from '../Redux/Action/GetTheaterAction'

export default function Theater(props) {
  const [theaters, setTheaters] = useState([])

  useEffect(() => {
    // console.log(city)
    var unscribe = store.subscribe(()=>{
      console.log("@Theater 订阅中, 此时test的值为", store.getState().TestReducer.test)
      setTheaters(store.getState().GetTheaterReducer.theatersList)
    })

    if (store.getState().GetTheaterReducer.theatersList.length===0) {
      console.log("=0")
      store.dispatch(getTheaterAction())
    } else {
      console.log(">0")
      setTheaters(store.getState().GetTheaterReducer.theatersList)
    }

    console.log("@Theater 订阅外: CityReducer", store.getState().CityReducer.city)
    return () =>{ unscribe() }
  }, [])

  return (
    <div>
      {console.log('渲染theater')}
      <div style={{background:"antiquewhite", height:"30px", lineHeight:"30px"}}>
      <span style={{float:"left"}} onClick={()=>props.history.push(`/theater/city`)}>{store.getState().CityReducer.city}</span>
      <button onClick={()=>{store.dispatch(test())}}>测试</button>
      <button style={{float:"right"}} onClick={()=>{props.history.push(`/theater/search`)}}>🔍</button>
      </div>


      {theaters.map(item=>
      <li key={item.cinemaId}>
        <div style={{fontSize:"18px", marginTop:"2px"}}>{item.name}</div>
        <div style={{fontSize:"13px", marginBottom:"2px"}}>{item.address}</div>
      </li>)}
    </div>
  )
}
