import React, { Component } from 'react'
import {HashRouter, Route, Redirect, Switch} from "react-router-dom"
import Films from '../view/films'
import Theater from '../view/theater'
import Setting from '../view/setting'
import Page404 from '../view/P_404'

export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            <Switch>
                <Route path="/films" component={Films}></Route>
                <Route path="/theater" component={Theater}></Route>
                <Route path="/setting" component={Setting}></Route>

                {/* 精确匹配 */}
                <Redirect from='/' to="/films" exact></Redirect>
                <Route component={Page404}></Route>
            </Switch>
        </HashRouter>
      </div>
    )
  }
}


