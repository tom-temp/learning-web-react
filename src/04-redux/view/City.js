import {React, useState} from 'react'
import store from '../Redux/Store'
import { cityChange } from '../Redux/Action/CityAction'
export default function City(props) {
    const [cityList, setCityList] = useState(["上海", "北京", "广州", "深圳"])

  return (
    <div>City:
        {/* {console.log(cityList)} */}
        {cityList.map((item, index) =>
            <li onClick={()=>{
                store.dispatch(cityChange(item))
                props.history.goBack()
            }} key={index} >{item}</li>
        )}

    </div>
  )
}
