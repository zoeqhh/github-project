import React from 'react'
import { Menu, Layout, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginSuccess } from '../../store/actions/global'
import './index.css'

const { Header } = Layout

function MyHeader(props) {
  // console.log(props.isLogin)
  const history = useHistory()
  const sightOut = () => {
    props.loginSuccess(false)
    history.push('/login')
  }
  if (props.isLogin === false) {
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

export default connect((state) => ({ ...state.global }), { loginSuccess })(MyHeader)
