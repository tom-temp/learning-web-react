import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getFilmsAction } from "../Redux/Action/GetFilmsAction";
function FilmsShowing(props) {
  useEffect(() => {
    if (props.filmsList.length===0){
      props.getFilmsAction("./films.js")
      // console.log(props)
    }
  }, [])

  const handleCangePage = (filmId)=>{
    // console.log(filmId)
    // window.location.href="#/detail/"+filmId
    props.history.push(`/detail/${filmId}`)
  }

  return (
    <div>
      {
        props.filmsList.map((item)=>
        <li key={item.filmId}
            onClick={()=>handleCangePage(item.filmId)}
        >
          {item.name}
        </li>)
      }

    </div>
  )
}
export default connect(
    (state)=>{return{filmsList:state.GetFilmsReducer.filmsList}},
    {getFilmsAction})(FilmsShowing)
