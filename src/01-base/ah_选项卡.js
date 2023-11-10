import React, { Component } from 'react'
import "./ah_style.css"
import axios from "axios"
class Movies extends Component {
    render(){
        return (
        <div>
            movies
            <div className='topbar'>
                <span id='city'> </span>
                <span id='text'>movies</span>
                <span id='mysitting' onClick={this.props.gotositting}>我的</span>
            </div>
        </div>
        )
    }
}

class Theatre extends Component {
    constructor(){
        super()
        // axios.get("请求地址").then(res=>{}).catch(err=>console.log(err))
        // 简化写法
        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6379523").then(
        //     res=>{console.log(res)}
        // ).catch(err=>{
        //     console.log(err)
        // })
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3865571",
            method:"get",
            header:{
                "X-Client-Info": {"a":"3000","ch":"1002","v":"5.2.1","e":"16877669628293311265636353","bc":"110100"},
                "X-Host": "mall.film-ticket.cinema.list",
                "X-Requested-With": "XMLHttpRequest",
            }
        }).then(res=>{
            console.log(res)
            this.setState({
                cinema_data:res.data
            })
        }).catch(err=>{
            console.log(err)
        })
        this.state={
            theatres:[{
                tid:1,
                name:"北京",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:2,
                name:"guan",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:3,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:4,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:5,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:6,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:7,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:8,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:9,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:10,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:11,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:12,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            },{
                tid:13,
                name:"shenz",
                position:"五环",
                distance:"10Km",
                minPrice:"23"
            }],
            cinema_data:[]
        }
    }
    // ref_input = React.createRef()

    act_search(event){
        // console.log(event.target.value)
        var new_list_cinema = this.state.theatres.filter((item)=>
            item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.position.toUpperCase().includes(event.target.value.toUpperCase())
        )
        console.log(new_list_cinema)
    }
    render(){
        return (
            <div className='theatres_thing'>
                <ul className='theatres_lsit'>
                    {
                        this.state.theatres.map((item)=>
                        <li key={item.tid} className='theatres_one'>
                            <div>
                                {/* #Question 导入变量是否在js总加$:只有变量不需要，变量+文本需要 */}
                                {item.name} <span className='price'>${item.minPrice}元起</span>
                            </div>
                            <div className='theatres_position'>
                                {item.position} <span className='distance'>{item.distance}</span>
                            </div>
                        </li>
                        )
                    }
                </ul>
                <div className='topbar'>
                    <span id='city'>北京</span>
                    {/* <span id='text'>影院</span> */}
                    <input id='text'
                    onInput={this.act_search.bind(this)}/>
                    <span id='search'>🔍</span>
                </div>
            </div>
        )
    }
}

class Mysetting extends Component {
    render(){
        return "mysetting"
    }
}

class Bottom_bar extends Component {
    render(){
        return (
            <div className='navbar'>
                <span className={this.props.current==="movies"?"nav-active":"nav-noactive"}
                onClick={()=>this.props.act_btn_nav("movies")}>电影
                </span>
                <span className={this.props.current==="theatre"?"nav-active":"nav-noactive"}
                onClick={()=>this.props.act_btn_nav("theatre")}>影院
                </span>
                <span className={this.props.current==="mysitting"?"nav-active":"nav-noactive"}
                onClick={()=>this.props.act_btn_nav("mysitting")}>我的
                </span>
                {console.log("Bottom_bar",this.props.current)}
            </div>
        )
    }
}


export default class App_ah_tab_switch extends Component {

    constructor(){
        super()
        this.state={
            current:"movies",
            // aaa:"1212"
        }
    }

    act_btn_nav(card_choice){
        // let new_current= "movies"
        // switch (card_choice){
        //     case "mysitting":
        //         new_current = "mysitting"
        //         break;
        //     case "theatre":
        //         new_current = "theatre"
        //         break;
        //     default:
        //         new_current = "movies"
        // }
        // console.log(new_current)


        this.setState({
            current:card_choice
        },()=>{console.log("回调函数",this.state.current)})

    }


  render() {
    return (
      <div>
        {/* <div>{this.state.aaa}</div> */}
        {this.state.current==="movies"?<Movies gotositting={()=>
            this.act_btn_nav("mysitting")
            }></Movies>:null}
        {this.state.current==="theatre"?<Theatre></Theatre>:null}
        {this.state.current==="mysitting"?<Mysetting></Mysetting>:null}
        {/* <${this.state.current}> */}



        <Bottom_bar current={this.state.current} act_btn_nav={this.act_btn_nav.bind(this)}/>
        {/* <div className='navbar'>
        <span className={this.state.current==="movies"?"nav-active":"nav-noactive"}
              onClick={()=>this.act_btn_nav("movies")}>电影
              </span>
        <span className={this.state.current==="theatre"?"nav-active":"nav-noactive"}
              onClick={()=>this.act_btn_nav("theatre")}>影院
              </span>
        <span className={this.state.current==="mysitting"?"nav-active":"nav-noactive"}
              onClick={()=>this.act_btn_nav("mysitting")}>我的
              </span>
        </div> */}

      </div>
    )
  }
}
