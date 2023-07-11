/*
 * 作者:tom-temp
 */

import React from "react";
import ReactDOM from "react-dom";

class App_first extends React.Component {
    render(){
        return <div>hello react</div>
    }
}
class App_second extends React.Component {
    render(){
        return (
        <div>hello react2</div>
        )
    }
}

// 函数式组件, 在16.8之前为无状态组件, 无法更新其中的数值
// 16.8之后, 使用hooks可以更新其中的值

function Fun_first(){
    return (
        <section>
            hello function Component

        </section>
    )
}

export default App_first
// export
