import {React, useState} from 'react'



export default function Login(props) {
    const [username, setUsername] = useState("")
  return (
    <div>
        <span>请输入用户名</span>
        <input value={username}
               onChange={(event)=>{setUsername(event.target.value)}}>
        </input>
        <button onClick={()=>{
            localStorage.setItem("token", username)
            console.log("写入token")
            console.log("写入token")
            setUsername("")
            props.history.push(`/setting`)
        }}>Save</button>
    </div>
  )
}
