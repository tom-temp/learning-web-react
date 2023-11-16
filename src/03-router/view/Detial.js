import React from 'react'

export default function Detial(props) {
  return (
    <div>
        {props.match.params.filmid}
        Detial
    </div>
  )
}
