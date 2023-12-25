import React from 'react'
import { useEffect, useState } from 'react'
// import useUpdateFilms from '../component/StateFunctions'


export default function Films(props) {

  return (
    <div>
      <button onClick={()=>{props.history.push(`/detail/1`)}}>进入detial</button>
      Films
    </div>
  )
}
