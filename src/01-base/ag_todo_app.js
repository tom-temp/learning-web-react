import React, { Component } from 'react'

export default class App_ag_todo extends Component {
    constructor(){
        super()
        this.state={
            list_todo:[{
                id:1,
                text:"111"
            },{
                id:2,
                text:"1212"
            }]
        }
    }
    ref_input = React.createRef()


    act_input_clear_value(){
        if(this.ref_input.current.value === this.ref_input.current.defaultValue){
            this.ref_input.current.value = ""
        }
    }
    act_btn_add (){
        console.log(this.ref_input.current.value)
        if (this.ref_input.current.value !== this.ref_input.current.defaultValue & this.ref_input.current.value !== ""){
            // 由于直接操作state会造成不可估计的错误,所以不推荐
            // this.state.list_todo.push( {
            //     id:Date.now(),
            //     text:this.ref_input.current.value
            // })
            // let new_list = [...this.state.list_todo] //深复制
            let new_list = this.state.list_todo.slice() //深复制方法2, 使用全切片
            new_list.push( {
                id:Date.now(),
                text:this.ref_input.current.value
            })
            // 虽然setState主要是修改, 但由于涉及函数及变量, 这里只用于通知改变
            this.setState({
                list_todo:new_list
            })
            this.ref_input.current.value = ""
        }
        console.log(this.state.list_todo)
    }
    act_btn_del(todolist_index){
        let new_list = this.state.list_todo.slice()
        new_list.splice(todolist_index, 1)
        console.log(todolist_index)
        console.log(new_list)

        // 声明改变
        this.setState({
            list_todo:new_list
        })
    }


    // 原生js写法, 直接操作dom, 比较浪费资源
    // show_todo_list() {
    //     var html_list_todo = "todo列表空空如也"
    //     if (this.state.list_todo.length > 0){
    //         html_list_todo = this.state.list_todo.map((item, index)=>
    //             <li key={item.id}>
    //                 <button onClick={()=>this.act_btn_del(index)}>del</button>
    //                 {item.text}
    //             </li>)
    //     } else {
    //         html_list_todo = "todo列表空空如也"
    //     }
    //     return html_list_todo
    // }
    show_todo_list() {
        var html_list_todo = this.state.list_todo.map((item, index)=>
            <li key={item.id} >
                <button onClick={()=>this.act_btn_del(index)}>del</button>
                {/* 插入html */}
                <span dangerouslySetInnerHTML={{__html:item.text}}></span>
                {/* {item.text} */}
            </li>)

        return html_list_todo
    }
  render() {
    return (
      <div>
        <input ref={this.ref_input} onClick={()=>this.act_input_clear_value()} defaultValue="请输入todo"/>
        <button onClick={()=>this.act_btn_add()}>增加todo</button>
        <br/>
        <ul>
            {this.show_todo_list()}
        </ul>
        {/* 条件渲染 */}
        {this.state.list_todo.length===0?<div>todolist无内容</div>:null}
        {this.state.list_todo.length===0 && <div>todolist无内容</div>}
      </div>
    )
  }
}
