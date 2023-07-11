import React, { Component } from 'react'
import './ac_style.css'

export default class App_ac_with_css extends Component {
  render() {
    var my_str = "1212"
    var style_li01 ={
        background:"yellow"
    }
    var style_li02 ={
        backgroundColor:"green",
        fontSize:"30px"
    }
    return (
      <div>
        <li>使用`{}大括号`可以直接进行运算,变量的引用,三位运算符等</li>
        {1+3} | my_str | {my_str} | {1>2?'1>2为真':'1>2为假'}
        <li style={style_li01}>行内`style`必须未对象(object)</li>
        <li style={style_li02}>`style`(object)中名称需更改为大驼峰写法:`fontSize:"30px"`,并且每一条后面需要加逗号</li>
        <li className='style_outcss'>也可以`import './ac_style.css'` 这杨来引入css样式, 是通过webpack这个包实现的</li>
        <label htmlFor="username">用户名:</label>
        <input type="text" id='username'></input>
      </div>
    )
  }
}
