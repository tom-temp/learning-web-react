import React, { Component } from 'react'

export default class App_af_state extends Component {
    constructor() { //类的构造器
        super() // 继承父类中的函数
        this.state={
            "text":"收藏",
            "is_like":true,
            "1212":"1212",
            "list":[{
                id:1,
                text:"111"
            },{
                id:2,
                text:"222",
            },{
                id:3,
                text:"333"
            }],
        }
    }
    // state = {
    //     "text":"收藏",
    //     "is_like":true,
    //     "1212":"1212"
    // }
    // list_todo = {
    //     "text":"收藏"
    // }

    //不好, 最好用变量, 最后显示变量
    // action_show() {
    //     var html_list_todo = this.state.list.map(item=><li>{item}</li>)
    //     console.log(html_list_todo)
    //     //map为js方法, item为list中每一个元素, js中不能用"来承载变量要用`${name}`
    //     // html_list_todo = html_list_todo.join()
    //     console.log(html_list_todo)
    //     // 将list转换为文本
    //     return html_list_todo
    // }



    action_btn() {
        this.setState({
            "is_like":!this.state.is_like
        })
    }


  render() {
    // 如果列表没有改变, key可以设置为索引"index"
    var html_list_todo = this.state.list.map((item, index)=><li key={item.id}>{item.text}</li>)
    return (
        <div>
            <button onClick={()=>this.action_btn()}>{this.state.is_like?"收藏":"取消收藏"}</button>
            {/* {this.action_show()} */}
            {html_list_todo}
            <hr/>
            <li>状态只得只有"state"这个变量, 其他自定义变量不可以为状态变量</li>
        </div>
    )
  }
}
