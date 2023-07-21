import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function App_useEffect() {
    const [data_film, set_film] = useState([])
    const [data_test, set_test] = useState("1212")
    useEffect(()=>{

        axios.get("/films.js").then((res)=>{
            {console.log(res.data.films)}
            set_film(res.data.films)
        })
        window.onresize = ()=>{console.log("resize")}
        var timer = setInterval(()=>{console.log("1s过去了")}, 1000)

        return () => {
            console.log('销毁了')
            console.log(data_test)
            window.onresize = null
            clearInterval(timer)
        }
    },[data_test])
  return (
    <div>
        <button onClick={()=>{set_test("变成第二个了")}}>更新</button>
        <hr></hr>
        <li>使用useState改变状态值，会使整个函数全部执行一次，所以需要使用useEffect来控制某些函数的执行</li>
        <li>useEffect第二个传入项为依赖项，意思是当这些值改变的时候改变数值</li>
        <li>useEffect中return函数会在依赖销毁时执行，以及改变依赖变量后，重新执行useEffect函数前执行</li>
        <li>useEffect可以使用多次，非常灵活</li>
        <hr></hr>
        <li>useLayoutEffect 会在dom生产完毕后，浏览器渲染完成前执行， 而useEffect却是再浏览器渲染完成后执行的，性能更好</li>
        <li>但是如果需要进行dom操作，避免页面抖动，则使用useLayoutEffect更好，因为他对于dom的操作会和初次渲染合并，一起被浏览器执行</li>
    </div>
  )
}
