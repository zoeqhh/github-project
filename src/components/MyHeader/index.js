import React from 'react'
import { Menu, Layout } from 'antd'

const { Header } = Layout

export default function MyHeader() {
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
