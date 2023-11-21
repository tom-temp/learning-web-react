import React from 'react'
import { withRouter } from 'react-router-dom'

// const WithFilmItem = withRouter(FilmItem)

export default withRouter(Setting)

function Setting(props) {
  var username = localStorage.getItem("token")
  return (
    <div>Setting-{username}
      <button onClick={()=>{
        localStorage.setItem("token", "")
        props.history.push(`/login`)
      }}>logout</button>
    </div>

  )
}
