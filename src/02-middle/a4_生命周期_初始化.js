import React, { Component } from 'react'

export default class App_life_start extends Component {
    UNSAFE_componentWillMount(){

    }
    componentWillMount(){

    }
    componentDidMount(){

    }

  render() {
    return (
      <div>
        <li>只有类有生命周期, render函数就是一个初始化生命周期, 他没有被调用就自动执行</li>
        <li>以及`UNSAFE_componentWillMount()`与`componentDidMount()`两个函数都是初始化生命周期</li>
        <li>执行顺序为: `UNSAFE_componentWillMount` - `render` - `componentDidMount`</li>
        <li>`UNSAFE_componentWillMount` 一般用来做状态或者数据初始化</li>
        <li>`componentDidMount`  数据与订阅函数调用一帮放在这里(constructor的功能), 以及对创建完的dom初始化, 比如better scroll</li>
      </div>
    )
  }
}
