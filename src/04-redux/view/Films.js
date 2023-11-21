import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
// import useUpdateFilms from '../component/StateFunctions'

function useUpdateFilms(url){
  const [value, setValue] = useState([])
  useEffect(() => {
    axios({
      url:url,
      method:"get",
      header:{
          "X-Client-Info": {"a":"3000","ch":"1002","v":"5.2.1","e":"16877669628293311265636353","bc":"110100"},
          "X-Host": "mall.film-ticket.cinema.list",
          "X-Requested-With": "XMLHttpRequest",
      }
      }).then(res=> {
        setValue(res.data.films)
      })
  }, [url])
  // console.log("axios完成",value)
  return (value)
}


export default function Films(props) {
  var allFilmsList = useUpdateFilms("./films.js")
  // var allFilmsList = []
  // console.log(allFilmsList)

  const handleCangePage = (filmId)=>{
    // console.log(filmId)
    // window.location.href="#/detail/"+filmId
    props.history.push(`/detail/${filmId}`)
  }

  return (
    <div>
      {
        allFilmsList.map((item)=>
        <li key={item.filmId}
            onClick={()=>handleCangePage(item.filmId)}
        >
          {item.name}
        </li>)
      }
    </div>
  )
}
