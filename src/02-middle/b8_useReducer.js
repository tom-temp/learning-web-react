import React,{useReducer, useContext} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// 处理函数
const reduce = (pervState, action_name) => {
    console.log("reduce函数工作")
    let newState = {...pervState}
    switch (action_name.type){
        case "test-plus":
            newState.number = newState.number+1
            return newState
        case "test-minus":
            newState.number = newState.number-1
            return newState
        case "change-bar1":
            newState.background1 = action_name.value
            return newState
        case "change-bar2":
            var number_list = Math.floor((Math.random()*pervState.list.length))
            console.log("随机数为"+number_list)
            newState.background2 = pervState.list[number_list]
            return newState
        default:
            console.log("无命中")
            return pervState
    }
}
//外部对象
const intialState = {
    number:0,
    list:["red","yellow","grey","green"],
    background1:"red",
    background2:"yellow"
}

const GlobalContext = React.createContext()


export default function App_b8_useReducer() {
    var note = '                                                \n\
> **useReducer**使用外部定义的处理函数与state对象               \n\
`const [state, dispatch] = useReducer(reduce, intialState)`     \n\
> **注意**useReducer("改变函数","state变量")                    \n\
> 改变state对线需*()=>{dispatch({type:"test-plus"})}*           \n\
一般与GlobalContext混用来传递信息                               \n\
- [ ] Pending task list 2                                       \n\
- [x] Completed task list 3                                     \n\
- [x] Completed task list 4                                     \n\
';
    const [state, dispatch] = useReducer(reduce, intialState)

  return (
    <div>
        <button onClick={()=>{
            dispatch({type:"test-plus"})
        }}>+</button>

        {state.number}
        <button onClick={()=>{
            dispatch({type:"test-minus"})
        }}>-</button>

        <hr></hr>
        <GlobalContext.Provider value={{
                state:state,
                dispatch, //简写模式
                }}>
        <Button_change></Button_change>
        <Bar1></Bar1>
        <Bar2></Bar2>
        </GlobalContext.Provider>

        <hr></hr>
        <ReactMarkdown remarkPlugins={[remarkGfm]} children={note} />

    </div>
  )
}
function Button_change(){
    const {dispatch} = useContext(GlobalContext)
    return(<div>
        <button onClick={()=>dispatch({type:"change-bar1", value:"orange"})}>change-bar1</button>
        <button onClick={()=>dispatch({type:"change-bar2"})}>change-bar2</button>
    </div>)
}

function Bar1() {
    const provider_value = useContext(GlobalContext)
    return (
        <div style={{backgroundColor:`${provider_value.state.background1}`}}>
            bar1
        </div>
    )
}

function Bar2() {
    const provider_value = useContext(GlobalContext)
    return (
        <div style={{backgroundColor:`${provider_value.state.background2}`}}>
            bar2
        </div>
    )
}
