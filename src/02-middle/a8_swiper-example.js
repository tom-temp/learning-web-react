import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, Scrollbar} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import axios from 'axios';

class Mod_Swiper extends Component {
    spername = ""
    create_swiper(){
        return new Swiper('.swiper', {
            // direction:"vertical",
            // loop:"true",
            modules: [Navigation, Pagination, Autoplay, Scrollbar],

            // autoplay: {
            //     // delay:2000
            // },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets', //'progressbar' | 'bullets' | 'fraction' | 'custom'
              },
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            //     draggable: true,
            //   },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            //   },
        })
    }
    componentDidMount(){
        this.spername = this.create_swiper()
    }
    componentDidUpdate(){
        this.spername = this.create_swiper()
    }
    render(){
        console.log("子render")
        return (
            <div className="swiper" style={this.props.style}>
            <div className="swiper-wrapper">
                {this.props.children}
            </div>
            {/* <!-- 如果需要分页器 --> */}
            <div className="swiper-pagination" style={{display:"flex", justifyContent:"flex-end"}}></div>

            {/* <!-- 如果需要导航按钮 --> */}
            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}

            {/* <!-- 如果需要滚动条 --> */}
            {/* <div className="swiper-scrollbar"></div> */}
            </div>
        )
    }
}

class Mod_Swiper_item extends Component {
    render() {
        return(
            <div className="swiper-slide">{this.props.children}</div>
        )
    }
}

export default class App_swiper extends Component {
    constructor(){
        super()
        this.state = {
            cinema_data:[]
        }
        // axios({
        //     url:"./films.js",
        // }).then(res=>{
        //     console.log("axios")
        //     // films_data = res.data.films
        //     console.log(res.data.films)
        //     this.setState({
        //         cinema_data:res.data.films
        //     })
        // }).catch(err=>{
        //     console.log(err)
        // })
    }

    // static getDerivedStateFromProps  () {
    //     console.log("getDerivedStateFromProps")
    //     // var films_data = []

    //     // return ({cinema_data:films_data})
    // }

  render() {
    console.log("render")
    return (
      <div>

        <Mod_Swiper   style={{backgroundColor:"yellow", height:"200px", width:"400px"}}>

            {this.state.cinema_data.map((item)=>
                <Mod_Swiper_item key={item.filmId}>
                    <img src={item.poster} alt={item.filmId} style={{width:"200px"}}></img>
                </Mod_Swiper_item>
            )}


            {/* <div className="swiper-slide">1212</div>
            <div className="swiper-slide">1212</div>
            <div className="swiper-slide">1212</div>
            <div className="swiper-slide">1212</div> */}
            {/* <Mod_Swiper_item>121212122</Mod_Swiper_item>
            <Mod_Swiper_item>222222222</Mod_Swiper_item>
            <Mod_Swiper_item>333333333</Mod_Swiper_item>
            <Mod_Swiper_item>444444444</Mod_Swiper_item> */}
        </Mod_Swiper>
      </div>
    )
  }

  componentDidMount(){
    axios({
        url:"./films.js",
    }).then(res=>{
        console.log("axios")
        // films_data = res.data.films
        console.log(res.data.films)
        this.setState({
            cinema_data:res.data.films
        })
    }).catch(err=>{
        console.log(err)
    })
    console.log("componentDidMount")
    console.log(this.state.cinema_data)
  }
}
