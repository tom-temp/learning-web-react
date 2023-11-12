import React, { Component } from 'react'

class Card extends Component {
    state = {
        value:"请输入"
    }
    render(){
        return(<div>
            <span>{this.props.what}</span>
            <input type={this.props.type}
                   value={this.state.value}
                   onChange={(event)=>{
                    this.setState({value:event.target.value},
                    ()=>{console.log(this.state.value)})
                    }}>
            </input>
        </div>)
    }
}

export default class APP extends Component {
    state = {
        user:"username",
        passwd:"password"
    }
    ref_user = React.createRef()
  render() {
    return (
      <div>
      {this.state.user}
      <Card ref={this.ref_user} what="请输入用户名" type="text"></Card>
      <button onClick={()=>{console.log(this.ref_user.current.state.value)}}>测试获取Card组件中的state数据</button>
      </div>
    )
  }
}
