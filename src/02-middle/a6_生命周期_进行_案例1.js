import React, { Component } from 'react'

class Box extends Component {
    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.index===Number(nextProps.current)){
            return true
        }
        if (this.props.index===Number(this.props.current)){
            return true
        }
        return false
    }
    render(){
        console.log("box-render")
        return (
            <div>
                <div
                style={{backgroundColor:"yellow", height:"100px", width:"100px", margin:"5px", float:"left",
                        border:this.props.index===Number(this.props.current)?"3px solid red":"3px solid grey"
                }}>
                {this.props.index}
                </div>
            </div>
        )
    }
}

export default class App_life_doing_ex1 extends Component {
    state = {
        list:["01", "02", "03", "04", "05", "06", "07"],
        thisbox:"01"
    }
    actor_input(event){
        console.log(event.target.value)
        this.setState({
            thisbox:event.target.value
        })
    }
  render() {
    return (
      <div >
        <input type="number" onChange={this.actor_input.bind(this)} value={this.state.thisbox} />
        <div style={{overflow:"hidden"}}>
        {this.state.list.map((item, index)=>
            <Box key={index} index={index} current={this.state.thisbox}></Box>
        )}
        </div>

      </div>
    )
  }
}
