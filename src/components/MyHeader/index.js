import React from 'react'
import { Menu, Layout, Button } from 'antd'
import './index.css'
import { useHistory } from 'react-router-dom'

const { Header } = Layout

export default function MyHeader(props) {
  // console.log(props.isLogin)
  const history = useHistory()
  const sightOut = () => {
    history.push('/login')
  }
  if (props.isLogin === 'false') {
    return (
      <div>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">查看用户仓库</Menu.Item>
          </Menu>
        </Header>
      </div>
    )
  }
  return (
    <div>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">查看用户仓库</Menu.Item>
        </Menu>
        <Button className="sight-out" type="primary" danger onClick={sightOut}>
          退出登录
        </Button>
      </Header>
    </div>
  )
}
