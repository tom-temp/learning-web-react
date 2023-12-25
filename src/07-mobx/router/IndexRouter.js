import React, { Component } from 'react'
import {HashRouter, Route, Redirect, Switch } from "react-router-dom"
import Films from '../view/Films'
import Page404 from '../view/P_404'
import Detial from '../view/Detial'

export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>

            <Switch>
                <Route path="/films" component={Films}></Route>
                <Route path="/detail/:filmid"  component={Detial}></Route>
                {/* 精确匹配 */}
                <Redirect from='/' to="/films" exact></Redirect>
                <Route component={Page404}></Route>
            </Switch>
            {this.props.children}
        </HashRouter>
      </div>
    )
  }
}


