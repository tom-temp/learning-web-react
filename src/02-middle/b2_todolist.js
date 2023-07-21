import React,{useState} from 'react'

export default function B2_func_todolist() {
    const [todolist, set_todolist] = useState([{num:"111", finish:true},{num:"2", finish:false}])
    const [input, set_input] = useState("请输入todo")

    const btn_add_todo = ()=>{
        // let new_todolist = todolist.slice()
        // new_todolist.push({num:input, finish:false})
        // set_todolist(new_todolist)
        set_todolist([...todolist, {num:input, finish:false}])
        set_input("")
    }
    const btn_change_checkbox = (index) =>{
        let new_todolist = todolist.slice()
        // console.log(new_todolist, index)
        new_todolist[index].finish=!new_todolist[index].finish
        set_todolist(new_todolist)
    }
    const btn_del_todo = (index) =>{
        let new_todolist = todolist.slice()
        new_todolist.splice(index,1)
        set_todolist(new_todolist)
    }
  return (
    <div>
        <h2>todolist-example</h2>
        <input value={input} onChange={(event)=>{set_input(event.target.value)}}></input>
        <button onClick={btn_add_todo}>插入数值</button>
        {todolist.length===0?<div>暂无代办实行</div>:null}
        {
        todolist.map((item, index)=>
        <li key={index}>
            {console.log(index)}
            <input type="checkbox" checked={item.finish} onChange={()=>{btn_change_checkbox(index)}}></input>
            <span style={{width:"200px", backgroundColor:"yellowgreen", display:"inline-block"}}>{item.num}</span>
            <button onClick={()=>btn_del_todo(index)}>del</button>
        </li>
        )}
    </div>
  )
}
