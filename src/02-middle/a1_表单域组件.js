import React, { Component, createRef } from 'react'
import { render } from 'react-dom'

function Card_input(props) {
    var test = props.what
    return (
        <div>
            <span>{props.what}</span>
            <input value={props.value} type={props.type} onChange={(event)=>props.onchange(event.target.value)}></input>
        </div>
    )
}

class Card_input2 extends Component {
    state = {
        value:"请输入1212",
    }
    clean() {
        this.setState({
            value:""
        })
    }
    render() {
        return (
            <div>
                <span>{this.props.what}</span>
                <input value={this.state.value} type={this.props.type}
                onChange={(event)=>
                    this.setState({value:event.target.value}, console.log(this.state))
                }></input>
            </div>
        )
    }
}

export default class App_a1_input extends Component {
    state={
        username:"请输入用户名",
        passwd:""
    }
    ref_username =React.createRef()
    ref_password =React.createRef()
    input_login(){
        console.log(this.state.username, this.state.passwd)
    }
    input_onchange(name,value) {
        this.setState({
            [name]:value
        },()=>console.log(value))
    }
  render() {
    return (
      <div>
        <Card_input what="用户名" value={this.state.username} type="text"
            onchange={(value)=>this.input_onchange("username", value)}/>
        <Card_input what="密码" value={this.state.passwd} type="password"
            onchange={(value)=>this.input_onchange("passwd", value)}/>
        {/* <Card_input what="密码"   value={this.state.passwd} type="password" onchange={(event)=>{
            this.setState({passwd:event.value})
        }}/> */}

        <button onClick={this.input_login.bind(this)}>提交</button>
        <button onClick={()=>
            this.setState({
                username:"",
                passwd:""
            })
        }>reset</button>
        <hr/>
        <li>ref传递</li>
        <Card_input2 what="用户名" value={this.state.username} type="text" ref={this.ref_username}/>
        <button onClick={()=>this.ref_username.current.state.value}>1212</button>
        <button onClick={()=>this.ref_username.current.clean()}>清空</button>

      </div>
    )
  }
}
