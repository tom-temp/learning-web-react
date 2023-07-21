import React, { Component } from 'react'

class App_child extends Component{

}

export default class App_life_new extends Component {

    state= {
        text:"abdsffd"
    }
    // static getDerivedStateFromProps(nextProps) {

    // }
    static getDerivedStateFromProps(nextProps, nextState){
        console.log("getDeviced")

        return ({text:"121212"})
    }
    componentDidUpdate(){
        console.log("didupdate")
    }

    getSnapshotBeforeUpdate(){

    }
  render() {
    return (
      <div>
        <li>`static getDerivedStateFromProps(nextProps)`生命周期除了销毁时， 其他时间都执行</li>
        <li>此函数的返回值直接合并state，比如下面的返回值</li>
        <div>{this.state.text}</div>
        <li>由于他是静态函数， 不能调用本身函数（`this.**`），所以此函数只用来改变state，由于此函数只合并state，所以适合异步执行，所有的`getDerivedStateFromProps`函数执行完成之后，再统一处理</li>
        <li>setstate等复杂操作请使用`componentDidUpdate(prevProps, prevState)`</li>

        <h2>getSnapshotBeforeUpdate</h2>
        <li>getSnapshotBeforeUpdate(){"return 123"}, return的值会返回到componentDidUpdate(prevProps, prevState, value)中的第三个参数</li>

        <hr></hr>
        <li>constructor =》getDerivedStateFromProps=》 render =》 componentDidMount</li>
        <li>componentWillReceiveProps =》 shouldComponentUpdate=》 getDerivedStateFromProps =》 render  =》getSnapshotBeforeUpdate=》 componentDidUpdate =》 </li>

        <hr></hr>
        <li>`PureComponent`自动对比前后state与props来减少`shouldComponentUpdate`的使用</li>
        <li> export default class App_life_new extends PureComponent {}</li>
      </div>
    )
  }
}
