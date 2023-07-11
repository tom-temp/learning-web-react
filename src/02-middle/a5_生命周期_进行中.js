import React, { Component } from 'react'

export default class App_life_doing extends Component {
  componentDidMount() {
    window.onresize = () => { console.log("resizing") }
    this.timer = setInterval(() => {
      console.log("timer doing")
    }, 1000)
  }
  UNSAFE_componentWillUpdate() {

  }
  componentDidUpdate(prevProps, prevState) {

  }
  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.state) === JSON.stringify(nextState)) {
      return false
    }
    return true
  }
  componentWillReceiveProps() {

  }
  componentWillUnmount() {
    window.onresize = null
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <li>render是初始化生命周期, 也是进行中的生命周期, 因为他会一遍一遍不断执行</li>
        <li>`UNSAFE_componentWillUpdate`与`componentDidUpdate`是两个进行中生命周期, 他们会在render重新执行的前面与后面执行</li>
        <li>点击按钮触发setstate - UNSAFE_componentWillUpdate - render - componentDidUpdate</li>
        <li>`componentDidUpdate(prevProps, prevState){ }` 提供2个行参, 名字可以随便写, 是老的属性与老的state, 用于函数内部判断, 避免多次运行</li>
        <h3>shouldComponentUpdate</h3>
        <li>`shouldComponentUpdate`是用来判断是否让render更新的函数, 如果return false, 则render不跟新. 比如说setstate并没有更改什么</li>
        <li>`shouldComponentUpdate(nextProps, nextProps){ }` 提供2个行参, 名字可以随便写, 是新的属性与新的state, 因为还没有执行render, 默认的参数还是老的参数</li>
        <li>由于state无法对比, 所以一般使用JSON.stringify(state)转化对象为string</li>
        <li>对于列表.map()到dom的方法, 每次渲染意味着搜游map()出来的节点都会重新渲染一次, 这时候使用`shouldComponentUpdate`就很有意义了</li>
        <h2>UNSAFE_componentWillReceiveProps(nextProps, nextProps)</h2>
        <li>子组件更新props时最先执行, 此函数最先获得属性, 可以预先处理</li>
        <h2> 生命周期销毁</h2>
        <li>`componentWillUnmount`在组件销毁前最后做的事情，一般用于删除监听函数， 定时器等</li>


        <hr></hr>
        <li>constructor ==》 render =》 componentDidMount</li>
        <li>componentWillReceiveProps =》 shouldComponentUpdate =》UNSAFE_componentWillUpdate =》 render =》 componentDidUpdate =》 </li>
      </div>
    )
  }
}
