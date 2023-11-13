import React, { useEffect, useState } from 'react'

export default function App_test() {
    const [var_num, set_var_num] = useState(5)

    const log = () => {
        setTimeout(() => {
          console.log("3 秒前 temp = 5，现在 temp =", var_num);
        }, 3000);
      };


    useEffect(()=>{
        console.log("useEffect执行")
        return () => {
            console.log("return执行")
        }
    },[var_num])

  return (
    <div>
        <p>{var_num}</p>
        <button onClick={() => {
        set_var_num(3);
        log();
        // 3 秒前 temp = 5，现在 temp = 5
        console.log("现在 num :", var_num); //5
        }}>xyz</button>

    </div>
  )
}
