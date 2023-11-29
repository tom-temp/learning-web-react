import {React, useEffect, useState, useMemo} from 'react'
import {store} from '../Redux/Store'
import { getTheaterAction } from '../Redux/Action/GetTheaterAction'

export default function TheaterSearch(props) {
    const [valueInput, setValueInput] = useState("")
    const [theaters, setTheaters] = useState([])
    const [theaterFilter, setTheaterFilter] = useState([])

    useMemo(() => {
        console.log("useMemo")
        setTheaterFilter(theaters.filter((item)=>
        item.name.toUpperCase().includes(valueInput.toUpperCase())||item.address.toUpperCase().includes(valueInput.toUpperCase())))
    }, [valueInput, theaters])

    useEffect(() => {
      var unscribe = store.subscribe(()=>{
        console.log("@Search 订阅中,")
        setTheaters(store.getState().GetTheaterReducer.theatersList)
      })

      if (store.getState().GetTheaterReducer.theatersList.length===0) {
        console.log("@Search", "=0")
        store.dispatch(getTheaterAction())
      } else {
        console.log("@Search", ">0")
        setTheaters(store.getState().GetTheaterReducer.theatersList)
      }

      return () =>{ unscribe() }
    }, [])

  return (
    <div>
        <div>
            <span onClick={()=>props.history.goBack()}>back</span>
            <input value={valueInput} onChange={(evt)=>setValueInput(evt.target.value)}></input>
            TheaterSearch
        </div>

        {theaterFilter.map(item=>
        <li key={item.cinemaId}>
            <div style={{fontSize:"18px", marginTop:"2px"}}>{item.name}</div>
            {/* <div style={{fontSize:"13px", marginBottom:"2px"}}>{item.address}</div> */}
        </li>)}
    </div>
  )
}
