import React, { useReducer, useContext } from 'react'
import "./b9_style.css"
import axios from "axios"

const GlobalContext = React.createContext()
// 处理函数
const reduce = (pervState, action_name) => {
    console.log("reduce函数工作")
    let newState = {...pervState}
    switch (action_name.type){
        case "tabs_set":
            newState.tabs_current = action_name.value
            return newState
        default:
            console.log("无命中")
            return pervState
    }
}
//外部对象
const intialState = {
    tabs_current:"movies",
    tabs_objects:{movies:"movies", theatre:"theatre", mysitting:"mysitting"},
}

function  Mysetting() {
    return "mysetting"
}
function Movies(){
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div>
            movies
            <div className='topbar'>
                <span id='city'> </span>
                <span id='text'>movies</span>
                <span id='mysitting'
                    onClick={()=>dispatch({type:"tabs_set", value:state.tabs_objects.mysitting})}>
                    我的
                </span>
            </div>
        </div>
        )
}
function Theatre(){
    return "Theatre"
}


// class Theatre extends Component {
//     constructor(){
//         super()
//         // axios.get("请求地址").then(res=>{}).catch(err=>console.log(err))
//         // 简化写法
//         // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6379523").then(
//         //     res=>{console.log(res)}
//         // ).catch(err=>{
//         //     console.log(err)
//         // })
//         axios({
//             url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3865571",
//             method:"get",
//             header:{
//                 "X-Client-Info": {"a":"3000","ch":"1002","v":"5.2.1","e":"16877669628293311265636353","bc":"110100"},
//                 "X-Host": "mall.film-ticket.cinema.list",
//                 "X-Requested-With": "XMLHttpRequest",
//             }
//         }).then(res=>{
//             console.log(res)
//             this.setState({
//                 cinema_data:res.data
//             })
//         }).catch(err=>{
//             console.log(err)
//         })
//         this.state={
//             theatres:[{
//                 tid:1,
//                 name:"北京",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:2,
//                 name:"guan",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:3,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:4,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:5,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:6,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:7,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:8,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:9,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:10,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:11,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:12,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             },{
//                 tid:13,
//                 name:"shenz",
//                 position:"五环",
//                 distance:"10Km",
//                 minPrice:"23"
//             }],
//             cinema_data:[]
//         }
//     }
//     // ref_input = React.createRef()

//     act_search(event){
//         // console.log(event.target.value)
//         var new_list_cinema = this.state.theatres.filter((item)=>
//             item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.position.toUpperCase().includes(event.target.value.toUpperCase())
//         )
//         console.log(new_list_cinema)
//     }
//     render(){
//         return (
//             <div className='theatres_thing'>
//                 <ul className='theatres_lsit'>
//                     {
//                         this.state.theatres.map((item)=>
//                         <li key={item.tid} className='theatres_one'>
//                             <div>
//                                 {item.name} <span className='price'>${item.minPrice}元起</span>
//                             </div>
//                             <div className='theatres_position'>
//                                 {item.position} <span className='distance'>{item.distance}</span>
//                             </div>
//                         </li>
//                         )
//                     }
//                 </ul>
//                 <div className='topbar'>
//                     <span id='city'>北京</span>
//                     {/* <span id='text'>影院</span> */}
//                     <input id='text'
//                     onInput={this.act_search.bind(this)}/>
//                     <span id='search'>🔍</span>
//                 </div>
//             </div>
//         )
//     }
// }



function Bottom_bar() {
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div className='navbar'>
            {/* {console.log("Bottom_ba_render", state)} */}
            <span className={state.tabs_current===state.tabs_objects.movies?"nav-active":"nav-noactive"}
            onClick={()=>dispatch({type:"tabs_set", value:state.tabs_objects.movies})}>电影
            </span>
            <span className={state.tabs_current===state.tabs_objects.theatre?"nav-active":"nav-noactive"}
            onClick={()=>dispatch({type:"tabs_set", value:state.tabs_objects.theatre})}>影院
            </span>
            <span className={state.tabs_current===state.tabs_objects.mysitting?"nav-active":"nav-noactive"}
            onClick={()=>dispatch({type:"tabs_set", value:state.tabs_objects.mysitting})}>我的
            </span>

        </div>
    )
}


export default function App_b9_useMyFunction_tab() {

    const [state, dispatch] = useReducer(reduce, intialState)

    return (<div>
        <GlobalContext.Provider value={{state, dispatch}}>
        {/* {console.log(state)} */}
        {state.tabs_current==="movies"?<Movies></Movies>:null}
        {state.tabs_current==="theatre"?<Theatre></Theatre>:null}
        {state.tabs_current==="mysitting"?<Mysetting></Mysetting>:null}

        <Bottom_bar/>
        </GlobalContext.Provider>
    </div>)

}
