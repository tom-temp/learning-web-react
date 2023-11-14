import React, { Component, useContext, useEffect, useReducer, useState } from 'react'
import "../Css/ah_style.css"
import axios from "axios"

const GlobalContext = React.createContext()
const value_c1_tab = {
    current:"movies",
    theatres:[],
}

const useReducer_value_c1_tab = (preState, actionMode) => {
    console.log("log_useReducer", "actionMode为：", actionMode)
    let newState = {...preState};
    switch (actionMode.type) {
        case "choose-tab":
            console.log("log_useReducer", "切换tab")
            newState.current = actionMode.value
            return newState
        case "get-theater":
            console.log("获取cinema——list")
            axios({
                url:"./cinema.js",
                method:"get",
                header:{
                    "X-Client-Info": {"a":"3000","ch":"1002","v":"5.2.1","e":"16877669628293311265636353","bc":"110100"},
                    "X-Host": "mall.film-ticket.cinema.list",
                    "X-Requested-With": "XMLHttpRequest",
                }
            }).then(res=>{
                // console.log(res.data)
                newState.theatres = res.data
            }).catch(err=>{
                console.log(err)
            })
            return newState
        case "set-theater":
            console.log("log_useReducer", "reducer-set-theater")
            newState.theatres = actionMode.value
            return newState
        default:
            console.log("log_useReducer", "reduce无命中")
            return preState
    }
}

function useFilterTheater(theaterList, value){
    console.log("in useFilter")
    return (theaterList.filter((item)=>
    item.name.toUpperCase().includes(value.toUpperCase()) || item.address.toUpperCase().includes(value.toUpperCase())))
}


function useMyCinemaList(){
	const [state, dispatch] = useReducer(useReducer_value_c1_tab, value_c1_tab)
    useEffect(()=>{
        axios({
            url:"./cinema.js",
            method:"get",
            header:{
                "X-Client-Info": {"a":"3000","ch":"1002","v":"5.2.1","e":"16877669628293311265636353","bc":"110100"},
                "X-Host": "mall.film-ticket.cinema.list",
                "X-Requested-With": "XMLHttpRequest",
            }
        }).then(
            res=>{
            dispatch({type:"set-theater", value:res.data})
            // settheatresList(res.data) ;
            // console.log("axios以请求", res.data)
        })
    },[])
	return (state.theatres)
}



function Theatre(){
    const [var_input, set_var_input] = useState("")

    var allTheaterList = useMyCinemaList()
    var filterTheaterList = useFilterTheater(allTheaterList, var_input)

    console.log("log_Theatre", "allTheaterList值为：", filterTheaterList)
    return (
        <div className='theatres_thing'>
            <ul className='theatres_lsit'>
                {
                    filterTheaterList.map((item)=>
                    <li key={item.cinemaId} className='theatres_one'>
                        <div>
                            {/* #Question 导入变量是否在js总加$:只有变量不需要，变量+文本需要 */}
                            {item.name} <span className='price'>${item.lowPrice}元起</span>
                        </div>
                        <div className='theatres_position'>
                            {item.address} <span className='distance'>{item.Distance}</span>
                        </div>
                    </li>
                    )
                }
            </ul>
            <div className='topbar'>
                <span id='city'>北京</span>
                {/* <span id='text'>影院</span> */}
                <input id='text' value={var_input}
                       onChange={(event)=> set_var_input(event.target.value)}/>
                <span id='search'>🔍</span>
            </div>
        </div>
    )
}


function Movies() {
    const {dispatch} = useContext(GlobalContext)
    return(
        <div>
        movies
        <div className='topbar'>
            <span id='city'> </span>
            <span id='text'>movies</span>
            <span id='mysitting'
                onClick={()=>dispatch({type:"choose-tab", value:"mysitting"})}>
                我的</span>
        </div>
        </div>
    )
}

function Mysetting(){
    var allTheaterList = useMyCinemaList()
    return "mysetting"
}

function Bottom_bar(){
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div className='navbar'>
            <span className={state.current==="movies"?"nav-active":"nav-noactive"}
            onClick={()=>{
                dispatch({type:"choose-tab", value:"movies"})
                }}>电影
            </span>
            <span className={state.current==="theatre"?"nav-active":"nav-noactive"}
            onClick={()=>dispatch({type:"choose-tab", value:"theatre"})}>影院
            </span>
            <span className={state.current==="mysitting"?"nav-active":"nav-noactive"}
            onClick={()=>dispatch({type:"choose-tab", value:"mysitting"})}>我的
            </span>
            {console.log("log_渲染", "Bottom_bar", state.current)}
        </div>
    )
}

export default function App_C1_tab() {
    const [state, dispatch] = useReducer(useReducer_value_c1_tab, value_c1_tab)
    // console.log(dispatch)
    return(
        <GlobalContext.Provider value={{state, dispatch}}>

        {state.current==="movies"?<Movies></Movies>:null}
        {state.current==="theatre"?<Theatre></Theatre>:null}
        {state.current==="mysitting"?<Mysetting></Mysetting>:null}

        <Bottom_bar/>
      </GlobalContext.Provider>
    )
}

