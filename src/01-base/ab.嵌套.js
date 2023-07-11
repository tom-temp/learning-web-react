
import React, { Component } from 'react'

class Navibar extends React.Component {
    render() {
        return <div>Navibar</div>
    }
}

class Swiper extends React.Component {
    render(){
        return <div>this is Swiper</div>
    }
}

// 使用es6箭头函数定义组件
// const Tabbar = ()=> <div> this is Tabber</div> 最简化写法
const Tabbar = ()=>{
    return <div> this is Tabber</div>
}

export default class Box2body extends Component {
  render() {
    return (
      <div>
        <Navibar></Navibar>

        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

