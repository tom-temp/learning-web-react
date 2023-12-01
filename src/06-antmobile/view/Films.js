import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import {  Swiper, Tabs } from 'antd-mobile'

import {getFilmsAction} from '../Redux/Action/GetFilmsAction'
import { Route, Redirect } from 'react-router-dom'

import FilmsShowing from './FilmsShowing'
import FilmsComing from './FilmsComing'

function Films(props) {

  return (
    <div>
      <Swiper autoplay loop allowTouchMove slideSize={60} trackOffset={15}  stuckAtBoundary={false} indicatorProps={{ color: 'white', }}>
        {props.filmsList.slice(0,4).map(item=>
          <Swiper.Item key={item.filmId}>
            <img src={item.poster}
                 style={{height:"150px", width:"100%", objectFit:"cover", borderLeft:"100px black"}}>

            </img>
          </Swiper.Item>
          )}
      </Swiper>

      <Tabs style={{position:"sticky", top:"0px", backgroundColor:"white", zIndex:"99"}}
            onChange={(value)=>props.history.push(value)}
            activeKey={props.location.pathname}
      >
          <Tabs.Tab title='正在上映' key='/films/showing' />
          <Tabs.Tab title='即将上映' key='/films/comming' />
      </Tabs>

      <Route path='/films/showing' component={FilmsShowing}></Route>
      <Route path='/films/comming' component={FilmsComing}></Route>
      <Redirect from='/films' to="/films/showing" exact></Redirect>

    </div>
  )
}


export default connect(
  (state)=>{return {filmsList:state.GetFilmsReducer.filmsList}},
  {getFilmsAction})(Films)

