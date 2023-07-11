import React, { Component } from 'react'
import { flushSync } from 'react-dom'
import BetterScorll from 'better-scroll'

export default class App_ai_setstate extends Component {
    state={
        countnumber:1,
        list_data:[],
    }
    act_btn_sync(){
        this.setState({
            countnumber:this.state.countnumber+1
        },()=>{console.log("回调函数, 这个log最后出",this.state.countnumber)})

        this.setState({
            countnumber:this.state.countnumber+1
        })
        console.log(this.state.countnumber)
        this.setState({
            countnumber:this.state.countnumber+1
        })
        console.log(this.state.countnumber)
    }
    act_btn_nosync = ()=>{
        flushSync(()=>{
            this.setState({ countnumber:this.state.countnumber+1 })
        })
        console.log(this.state.countnumber)
        this.setState({
            countnumber:this.state.countnumber+1
        })
        console.log(this.state.countnumber)
        this.setState({
            countnumber:this.state.countnumber+1
        })
        console.log(this.state.countnumber)

    }


  render() {
    return (
      <div>
        {this.state.countnumber}
        <button onClick={this.act_btn_sync.bind(this)}>setstate异步执行, 在正常模式中, setstate会推迟到方法最后,查看是否有机会合并处理</button>
        <br/>
        <button onClick={this.act_btn_nosync}>setstate同步执行</button>
        <hr/>
        <button onClick={this.act_btn_getdata.bind(this)}>点我获取数据</button>
        <div className='scroll-window' style={{height:"300px", backgroundColor:"yellow", overflow:"hidden" }}>
        <div>
        {this.state.list_data.map((item)=>
            <div key={item}>{item}</div>
        )}
        </div>
        </div>
      </div>
    )
  }

  act_btn_getdata(){
    var list_data=[1,2,3,4,5,6,7,8,9,10,11,12,134,152,26,1314]
    this.setState({
        list_data:list_data
    },()=>{
        console.log(this.state.list_data)
        new BetterScorll(".scroll-window") //必须包裹在被撑大的盒子的外部一层
    })
  }
}
