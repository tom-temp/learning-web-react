import React, { Component } from 'react'
import axios from'axios'

// 方法2：使用js原生订阅模式
// var bus = {
//     list:[],
//     subscribe(callback){
//         this.list.push(callback)
//     },
//     publish(value){
//         this.list.forEach((callback)=>{
//             callback && callback(value)
//         })
//     }
// }

// 方法3：使用react中context对象
const GlobalContext = React.createContext()


class Card_filme extends Component {
    style_film = {
        backgroundColor: "#f0f0f0",
        margin: "5px",
        display: "flex",
        flexDirection: "row"
    }

    shou_detial(provider, value){
        console.log(value)
        // bus.publish(value) // 方法2：使用js原生订阅模式
        // provider.filminfo = value
        provider.filminfo_change(value)
    }

    shouldComponentUpdate(nextProps, nextState){
        if(JSON.stringify(this.props.value) === JSON.stringify(nextProps.value)){
            console.log("列表状态无改变")
            return false
        }
        return true
    }

    render(){
        let {name, item, poster, synopsis}= this.props.value
        {console.log("列表组件再次渲染")}
        return (
            <GlobalContext.Consumer>
            {(provider)=>
            <div style={this.style_film} onClick={this.shou_detial.bind(this,provider, synopsis,)}>
                <h4 style={{backgroundImage: `url(${poster})`,
                            backgroundSize: "100%",
                            width:"100px", height:"140px",
                            margin:"10px"}} >
                </h4>
                <div >
                    <div>{name}<span>{item.name}</span></div>
                    <div>观众评分:</div>
                </div>

            </div>
            }
            </GlobalContext.Consumer>)
    }
}

class Card_detial extends Component {
    constructor(){
        super()
        // 方法2：使用js原生订阅模式
        // bus.subscribe((value)=>{
        //     console.log(value)
        //     this.setState({
        //         detial:value
        //     })
        // })
        this.state = {
            detial:""
        }
    }
    render() {
        return (
        <GlobalContext.Consumer>
        {(value)=>
        <div style={{ backgroundColor:"yellow", position:"fixed", right:"0px", height:"200px", width:"300px" }}>
            <li>订阅者模块需要将回调函数注册到订阅平台中，发布者在订阅中心中找到并回调</li>
            <li>context传递中的`Consumer`标签中需要一个回调函数， 来传入发布者的数据</li>

            <li>{value.filminfo}</li>
            {this.props.children}
        </div>
        }
        </GlobalContext.Consumer>
        )
    }
}


export default class App_a2_connect extends Component {
    constructor(){
        super()
        this.state={
            filmlist : [],
            filminfo:"filminfo初始值"
        }
        axios.get(`/films.js`).then(res =>{
            // console.log(res.data.films)
            this.setState({
                filmlist: res.data.films
            })
        }
        )
    }

    style_card = {
        display: "flex",
        flexDirection: "row"
    }

  render() {
    return (
      <div>
        <GlobalContext.Provider value={{
                filminfo:this.state.filminfo,
                filminfo_change:(value)=>{
                    this.setState({filminfo:value})
                }
                }}>
            <Card_detial>
            <li>自定义标签内部的值叫做组件插槽（slot），需要在组件中以`this.props.children[0]`使用</li>
            <li>优势1：可以直接使用父组件的数值，避免一部分父子通信</li>
            <li>优势2：复用， 比如轮播可以在父组件中设置图片</li>
            </Card_detial>

            {this.state.filmlist.map((item)=>
            <Card_filme key={item.filmId} value={item}></Card_filme>)
            }
        </GlobalContext.Provider>
      </div>
    )
  }
}
