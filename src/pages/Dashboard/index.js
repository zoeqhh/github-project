// @ts-nocheck
import React from 'react'
// import { getUserStore,getStoreDetaiMsg } from '../../services'
import { connect } from 'react-redux'
import { Layout, Input, Space } from 'antd'

import {
  withRouter,
} from 'react-router-dom'
import { StoreList } from '../../components'
import { requestuserStoreAction } from '../../store/actions/user'
import './index.css'

const { Content } = Layout

const { Search } = Input

function DashBoard(props) {
  // 获得输入框的value值
  const handelChange = (e) => {
    props.requestuserStoreAction({
      username: e.target.value,
    })
  }

  // 发送请求获得用户信息
  const serachUser = () => {
    // console.log(props.username)
    if (props.username !== '') {
      requestuserStoreAction(props.username)
    } else alert('请输入user名')
  }

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Content style={{ margin: '0 16px' }}>
          <Space style={{ paddingLeft: '50px' }}>
            <Search
              defaultValue=""
              onChange={handelChange}
              className="search"
              placeholder="input search text"
              onSearch={serachUser}
              enterButton
            />
          </Space>
          <StoreList
            username={props.username}
            StoreArray={props.StoreArray}
          />
        </Content>
      </Layout>
    </div>
  )
}

export default connect((state) => ({ ...state.user }), { requestuserStoreAction })(withRouter(DashBoard))
