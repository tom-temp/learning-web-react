import React,{useCallback, useContext, useEffect, useState} from 'react'
import axios from 'axios'


const GlobalContext = React.createContext()

function Card_filme(props) {
    // CSS
    let style= {
        film : {
        backgroundColor: "#f0f0f0",
        margin: "5px",
        display: "flex",
        flexDirection: "row"
        },
        poster: {
        backgroundSize: "100%",
        width:"100px",
        height:"140px",
        margin:"10px"
        }
    }

    let {name, item, poster, synopsis}= props.value
    const provider_value = useContext(GlobalContext)
    // console.log(provider_value)
    const shou_detial = useCallback((synopsis)=> {
        console.log(synopsis)
        provider_value.filminfo_change(synopsis)
        console.log(provider_value)
    },[])

    return (
        <div>
        {console.log("列表组件再次渲染")}
        <div style={style.film} onClick={()=>shou_detial(synopsis)}>
            <h4 style={{backgroundImage: `url(${poster})`, ...style.poster}} >
            </h4>
            <div >
                <div>{name}<span>{item.name}</span></div>
                <div>观众评分:</div>
            </div>

        </div>
        </div>)
}

function Card_detial(props) {
    const provider_value = useContext(GlobalContext)
    return (<div>
        {console.log("detial组件再次渲染")}
        <div style={{ backgroundColor:"yellow", position:"fixed", right:"0px", height:"200px", width:"400px" }}>
            {props.children}
            <hr></hr>
            <li>{provider_value.filminfo}</li>
        </div>
    </div>)
}


export default function App_b7_useContext() {
    // js
    const [filmlist,change_filmlist] = useState([])
    const [filminfo,change_filminfo] = useState("filminfo初始值")

    useEffect(()=>{
        axios.get("/films.js").then((res)=>{
            // {console.log(res.data.films)}
            change_filmlist(res.data.films)
        })
        return () => {}
    },[])

    return (
        <div>
        <GlobalContext.Provider value={{
                filminfo:filminfo,
                filminfo_change:(value)=>{
                    change_filminfo(value)
                }
                }}>
            <Card_detial>
            <li>在子函数中使用`useContext`可以简单化子组件代码,直接把provider中设置的value传给子组件的变量</li>
            </Card_detial>

            {filmlist.map((item)=>
            <Card_filme key={item.filmId} value={item}></Card_filme>)
            }
        </GlobalContext.Provider>
      </div>
    )
  }




