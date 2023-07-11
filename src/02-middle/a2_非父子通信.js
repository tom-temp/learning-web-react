import React, { Component } from 'react'
import axios from'axios'

// 方法2：使用js原生订阅模式
var bus = {
    list:[],
    subscribe(callback){
        this.list.push(callback)
    },
    publish(value){
        this.list.forEach((callback)=>{
            callback && callback(value)
        })
    }
}

// 方法3：使用react中context对象
const GlobalContext = React.createContext()


class Card_filme extends Component {
    style_film = {
        backgroundColor: "#f0f0f0",
        margin: "5px",
        display: "flex",
        flexDirection: "row"
    }

    shou_detial(value){
        // console.log(value)
        bus.publish(value) // 方法2：使用js原生订阅模式
    }

    render(){
        let {name, item, poster, synopsis}= this.props.value
        return (<div style={this.style_film} onClick={this.shou_detial.bind(this,synopsis)}>
            <h4 style={{backgroundImage: `url(${poster})`,
                        backgroundSize: "100%",
                        width:"100px", height:"140px",
                        margin:"10px"}} ></h4>
            <div >
                <div>{name}<span>{item.name}</span></div>
                <div>观众评分:</div>
            </div>

        </div>)
    }
}

class Card_detial extends Component {
    constructor(){
        super()
        // 方法2：使用js原生订阅模式
        bus.subscribe((value)=>{
            console.log(value)
            this.setState({
                detial:value
            })
        })
        this.state = {
            detial:""
        }
    }
    render() {
        return (
            <div style={{ backgroundColor:"yellow", position:"fixed", right:"0px", height:"200px", width:"300px" }}>
                <li>订阅者模块需要将回调函数注册到订阅平台中，发布者在订阅中心中找到并回调</li>
                <li>{this.state.detial}</li>
            </div>
        )
    }
}


export default class App_a2_connect extends Component {
    constructor(){
        super()
        this.state={
            filmlist : []
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
        <div>
            <Card_detial></Card_detial>
            {this.state.filmlist.map((item)=>
            <Card_filme key={item.filmId} value={item}></Card_filme>)}
        </div>
      </div>
    )
  }
}
