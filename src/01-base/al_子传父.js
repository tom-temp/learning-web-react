import React, { Component } from 'react'


class Navbar extends  Component {
    render(){
        return (
            <div style={{backgroundColor:"yellow"}}>
                <button onClick={this.props.fun_sidebar_hide}>显示side</button>
                navbar
                <button onClick={this.props.fun_sidebar_colr}>changecolor</button>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return(
            <ul style={{backgroundColor:this.props.back_color, width:"70px"}}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        )
    }
}

export default class App_al_trans_value_to_father extends Component {
    state = {
        sidebar_hide:false,
        sidebar_color:["red","yellow","blue","skyblue","#0f0f0f","#777"],
        sidebar_color_now:"red"
    }

    act_sidebarhide(){
        this.setState({
            sidebar_hide:!this.state.sidebar_hide
        })
    }
    act_sidecolor(){
        this.setState({
            sidebar_color_now:this.state.sidebar_color[Math.round(Math.random()*5)]
        })
    }
  render() {
    return (
      <div>
        <Navbar fun_sidebar_hide={this.act_sidebarhide.bind(this)}
                fun_sidebar_colr={this.act_sidecolor.bind(this)}
        ></Navbar>
        <div>{this.state.sidebar_hide}, {this.state.sidebar_color_now}</div>
        {this.state.sidebar_hide?null:<Sidebar back_color={this.state.sidebar_color_now}></Sidebar>}
        <li>子传父通过回调函数</li>
      </div>
    )
  }
}
