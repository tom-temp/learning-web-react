import React, { Component } from 'react'

export default class App_ah_input extends Component {
    state={
        username:"121212",
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

    input_search(event) {
      // console.log(event)
      // var test = this.state.theatres.filter((item)=>
      //   // 外围不能加{}
      //   item.name.includes(event.target.value)
      // )
      // console.log(test)
      this.setState({
        username:event.target.value
      })
    }

    show_list(filter_text){
      return this.state.theatres.filter((item)=>
        item.name.includes(filter_text)
      )
    }



  render() {
    return (
      <div>
        <input value={this.state.username}
        //在react中, onChange与onInput等价
        onChange={this.input_search.bind(this)}
        ></input>

        {this.show_list(this.state.username).map((item)=><li key={item.tid}>{item.name}</li>)}

        {/* {this.state.theatres.map((item)=><li key={item.tid}>{item.name}</li> )} */}

        <li>父元素的state变量与子组件的props值绑定了</li>
      </div>
    )
  }
}
