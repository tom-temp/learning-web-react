import {React, useEffect} from 'react'
import store from '../mobx/store'

export default function Detial() {

  useEffect(() => {
    store.isShowTabbarNO()
    return () => {
      store.isShowTabbarOK()
    }
  }, [])

  return (
    <div>
        Detial
    </div>
  )
}
