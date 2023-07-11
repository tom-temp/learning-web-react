import React, { Component } from 'react'
import PropType from 'prop-types'

function Sidebar(props) {
    var style_position = props.position === "left" ? {left:0} : {right:1}

    var style_side = {
        background:props.backcolor,
        margin: '0px',
        padding: '0px',
        width:"50px",
        display: "flex",
        flexDirection:"column",
        color: "black",
        textAlign: "center",
        position:"fixed",
        ...style_position
        // lineHeight: "50px"
    }
    var test = {...style_side, ...style_position}
    console.log(props)
    console.log(style_position)
    console.log(test)
  return (
    <div style={style_side}>
        11212
    </div>
  )
}
// 验证属性传递与默认属性只能放在函数式方法外
Sidebar.propTypes = {
    background:PropType.string,
    position:PropType.bool,
}
Sidebar.defaultProps = {
    background:"green",
    position: "left",
}

class Navbar extends Component {
    constructor(){
        super()
        // console.log(this.style_navbar)
    }
    // color = this.props.backcolor //this.props是类属性, 只能在render使用

    // 验证属性传递类型内部写法, 在类中定义类属性
    static propTypes = {
        backcolor:PropType.string,
        hide_first:PropType.bool,
    }
    static defaultProps = {
        backcolor:"green",
        hide_first: false,
    }

    color = "red"
    style_navbar = {
        background:this.color,
        margin: '0px',
        padding: '0px',
        height:"50px",
        display: "flex",
        color: "white",
        textAlign: "center",
        lineHeight: "50px"
    }

    render(){
        return (
            <div className='navbar'>
                {/* <div style={{backgroundColor:this.props.backcolor}}> */}
                <div style={this.style_navbar}>
                    <span style={{flex:1}}>{this.props.hide_first?null:"首页"}</span>
                    <span style={{flex:5}}>Navbar-{this.props.title}</span>
                    <span style={{flex:1}}>🔍</span>
                </div>
            </div>
        )
    }
}
// 验证属性传递类型外部写法
// Navbar.propTypes = {
//     backcolor:PropType.string,
//     hide_first:PropType.bool,
// }


export default class App_aj_props extends Component {
  render() {
    var data_from_father={
        backcolor:"yellow",
        hide_first:true,
    }

    return (
      <div>
        <h2>001</h2>
        <Navbar title="001" backcolor="red" hide_first={true}/>
        <h2>002</h2>
        <Navbar title="002" {...data_from_father}/>
        <h2>003</h2>
        <Navbar title="003" backcolor="green" hide_first={false}/>
        <Sidebar backcolor="yellow" position="right"></Sidebar>
        <hr/>
        <li>由于组件的状态不能通信, 所以引出组件的属性来作为state的补充</li>
      </div>
    )
  }
}
