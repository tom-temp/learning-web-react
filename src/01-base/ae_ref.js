import React, { Component } from 'react'

export default class App_ae_ref extends Component {
    ref_input = React.createRef()

    click_input() {
        if  (this.ref_input.current.value === this.ref_input.current.defaultValue){
            this.ref_input.current.value = ""
            console.log("清空input")
        }
        console.log("点击input")
    }
    click_btn() {
        console.log("121212", this.ref_input.current, this.ref_input.current.value)
        return <div>1212</div>
    }
    click_btn2() {
        this.ref_input.current.value = ""
    }
  render() {
    return (
      <div>
        <input ref={this.ref_input} defaultValue="请输入" onClick={()=>this.click_input()}/>
        <button onClick={()=>this.click_btn()}>获取ref为"ref_input"的dom节点</button>
        <button onClick={()=>this.click_btn2()}>清空输入</button>
      </div>
    )
  }
}
