import React, { Component } from 'react'

export default class App_ad_todo extends Component {
    a = 1100
    click_btn_btn1() {
        console.log("click_btn_btn1", this.a)
    }
    click_btn_btn2= ()=>{
        console.log("click_btn_2", this.a)
    }
    click_btn_btn3() {
        console.log("click_btn_3", this.a)
    }
  render() {
    return (
      <div>
        <input type="text" id='add_to_list'
            value='请输入下一个事项'
            onChange={()=>{}}
            onMouseOver={ ()=>{console.log("clickbutton", )}  }/>
        <button onClick={this.click_btn_btn1.bind(this)}>btn1.调用正常函数</button>
        <button onClick={this.click_btn_btn2}>btn2.调用箭头函数</button>
        <button onClick={ ()=>this.click_btn_btn3() }>btn3.通过匿名箭头函数调用函数, 推荐,可以传参数</button>
        <li>事项调用函数不要在后面加(), 否则浏览器在页面加载时会自动执行一次函数</li>
        <li>因为大括号中默认是数值, 如果调用函数就会被认为是函数return的值</li>
        <li>箭头函数由于this与外部render保持一致, 所以调用模块数值的时候,更推荐箭头匿名函数</li>
        <li>调用正常函数时(btn1), 调用者为"react事件程序", 所以函数内部this为"react事件程序", 不是输出的app实例模块</li>
        <li>所以要修改this指向, this.click_btn_btn1.bind(this)</li>
        <li>js修正this指向三种方法"apply","call","bind", 只有'bind'方法在修正this指向后不自动执行,所以用bind</li>
        <li>obj1.getname.call(obj2)</li>
        <li>obj1.getname.apply(obj2)</li>
        <li>obj1.getname.bind(obj2)()</li>
        <hr/>
        <li>react的事件不是帮定在dom上,而是绑定在root根节点上, 采用的事件代理的方案</li>
        <li>有事件对象,只不过是模拟的</li>
        <li>第二种方法默认会传递一个event的参数, event.target为触发的元素</li>
      </div>
    )
  }
}

