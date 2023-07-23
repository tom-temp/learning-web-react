import React,{useCallback, useState, useMemo, useRef} from 'react'

export default function App_b4_usecallback() {
    const [todolist, set_todolist] = useState([{num:"111", finish:true},{num:"2", finish:false}])
    const [input, set_input] = useState("请输入todo")
    const input_todo_text = useRef()  //React.createRef()

    const btn_add_todo = useCallback(()=>{
        // let new_todolist = todolist.slice()
        // new_todolist.push({num:input, finish:false})
        // set_todolist(new_todolist)
        // useState版本
        // set_todolist([...todolist, {num:input, finish:false}])
        // set_input("")
        // useRef 版本
        set_todolist([...todolist, {num:input_todo_text.current.value, finish:false}])
        console.log("useCallback执行")
    },[input_todo_text,todolist])
    const btn_change_checkbox = useCallback((index) =>{
        let new_todolist = todolist.slice()
        // console.log(new_todolist, index)
        new_todolist[index].finish=!new_todolist[index].finish
        set_todolist(new_todolist)
        console.log("测试：更改checkbox："+input) //第一次不行，第二次可以
    },[todolist])
    const btn_del_todo = useCallback((index) =>{
        let new_todolist = todolist.slice()
        new_todolist.splice(index,1)
        set_todolist(new_todolist)
    },[todolist])

    const btn_act_add = useMemo(()=>(evt)=>{
        console.log("只有第一次，或者依赖改变时改变")
    },[])

    const test_start = useMemo(()=>{
        console.log("usememo只有第一次，或者依赖改变时改变")
    },[])
    const test_list1 = useMemo(()=>[1,2,3],[])
    const test_list2 = useMemo(()=>{return [1,2,3]},[])
  return (
    <div>
        <h2>todolist-example</h2>
        {/* <input value={input} onChange={(event)=>{set_input(event.target.value)}}></input> */}
        <input ref={input_todo_text}></input>
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
        {test_list1}
        {test_list2}
        <hr></hr>
        <li>由于函数式组件每次渲染都会重新执行，所以需要使用callback函数固定中间的函数，禁止2次生成来增加稳定性与节省资源</li>
        <li>`useCallback`并不会开始就执行，而是当依赖改变时执行，useMemo则是开始就会执行一次</li>
        <li>`useMemo` 提供了方便的使用变量</li>
        <li>`useRef`  绑定dom，简单的检索出dom中的变量，并且可以和useState一样存储变量</li>
        <li>text=useRef(1);text.current=text.current+1;console.log(text.current)</li>
    </div>
  )
}
