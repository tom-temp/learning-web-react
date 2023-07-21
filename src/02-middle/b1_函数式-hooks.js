import React,{useState} from 'react'

export default function App_fun_hooks() {
    const [value_name, set_value_name] = useState("xiaoming")


  return (
    <div>
    <button onClick={()=>{set_value_name("1212")}}>setname</button>
    <div>name is {value_name}</div>
    </div>
  )
}
