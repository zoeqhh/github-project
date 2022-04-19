import React ,{useState} from 'react'
import getUserInfo from '../../services'
import { Layout, Menu, Breadcrumb, Input, Space } from 'antd';

import './index.css'

const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default function SearchAuthor() {
  // 函数式组件中是用hook调用state  初始值  userState
  let initUsername=''
  let initStoreArray=[]
  // 数据和修改数据的function
  let [username,setUsername]=useState(initUsername)
  let [StoreArray,setStoreArray]=useState(initStoreArray)
  // 获得输入框的value值
  const handelChange=(e)=>{
    setUsername({
      username:e.target.value
    })
  }
  // 发送请求获得用户信息
  const serachUser=(username)=>{
    console.log(username);
    getUserInfo(username)
      .then((res)=>{
        console.log(res);
        // 将返回的数据赋值给StoreArray 
        setStoreArray(res.data)
        console.log(StoreArray);
      })
      .catch((err)=>{
        console.error(err);
      })
  }
  
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">仓库查看器</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Space direction="vertical">
            <Search 
              defaultValue={initUsername}
              onChange={handelChange}
              className='search'  
              placeholder="input search text" 
              onSearch={serachUser} 
              enterButton 
            />
          </Space>
            {/* 详情去区域 */}
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <ul>
                {
                  StoreArray.map((storeItem)=>{
                    console.log(storeItem);
                    return (
                      <li key={storeItem.id}>{storeItem.name}</li>
                    )
                  })
                }
              </ul>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  )
}
