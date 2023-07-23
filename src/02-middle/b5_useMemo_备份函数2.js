import React from 'react'

export default function App_useMemo() {
  return (
    <div>
        <li>`useCallback`并不会开始就执行，而是当依赖改变时执行，useMemo则是开始就会执行一次</li>
        <li>但是如果需要进行dom操作，避免页面抖动，则使用useLayoutEffect更好，因为他对于dom的操作会和初次渲染合并，一起被浏览器执行</li>
    </div>
  )
}
