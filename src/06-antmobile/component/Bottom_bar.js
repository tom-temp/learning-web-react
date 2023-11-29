import React from 'react'
import style from './Bottom_bar.module.css'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import { withRouter } from 'react-router-dom'

function BottomBar(props) {
  const tabs = [
    {
      key: '/films',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/theater',
      title: '影院',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/setting',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div className={style.navbar}>
        <TabBar onChange={(value)=>{props.history.push(value)}}
        activeKey={"/"+props.location.pathname.split("/")[1]}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title}
            />
          ))}
        </TabBar>
    </div>
  )
}
export default withRouter(BottomBar)
