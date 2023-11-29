import React, { Component } from 'react'
import {HashRouter, Route, Redirect, Switch } from "react-router-dom"
import Films from '../view/Films'
import Theater from '../view/theater'
import Setting from '../view/setting'
import Page404 from '../view/P_404'
import Detial from '../view/Detial'
import Login from '../view/Login'
import City from '../view/City'
import TheaterSearch from '../view/TheaterSearch'

function isAuth(){
  console.log(localStorage.getItem("token"))
  console.log("111s")
	return localStorage.getItem("token")
}


export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            {this.props.children}
            <Switch>
                <Route path="/films" component={Films}></Route>
                <Route path="/detail/:filmid"  component={Detial}></Route>
                <Route path="/theater" component={Theater} exact></Route>
                <Route path="/theater/city" component={City}></Route>
                <Route path="/theater/search" component={TheaterSearch}></Route>
                <Route path="/setting" render={()=>
                  isAuth()?<Setting></Setting>:<Redirect to="/login"></Redirect> }></Route>
                <Route path="/login"   component={Login}></Route>
                {/* 精确匹配 */}
                <Redirect from='/' to="/films" exact></Redirect>
                <Route component={Page404}></Route>
            </Switch>
        </HashRouter>
      </div>
    )
  }
}


