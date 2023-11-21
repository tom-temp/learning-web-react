import {React, useEffect, useState} from 'react'
import store from '../Redux/Store'

export default function Theater(props) {
  const [city, setCity] = useState("北京")
  useEffect(() => {
    // console.log(city)
    var unscribe = store.subscribe(()=>{
      console.log("@Theater 订阅中")
    })

    console.log("@Theater 订阅外: CityReducer", store.getState().CityReducer.city)
    setCity(store.getState().CityReducer.city)
    return () =>{ unscribe() }
  }, [])


  return (
    <div>
      {console.log('渲染theater')}
      <div onClick={()=>props.history.push(`/theater/city`)}>{store.getState().CityReducer.city}-{city}</div>
      Theater
    </div>
  )
}
