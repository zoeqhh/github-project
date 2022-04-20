import React ,{useState} from 'react'
import { getUserInfo,getRepoRoots } from '../../services'
import { Layout, Menu, Input, Space } from 'antd';
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import {StoreList,MyHeader} from '../../components'

const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const style = { background: '#0092ff', padding: '8px 0' };

function DashBoard(props) {
  // console.log(props)
  // 函数式组件中是用hook调用state  初始值  userState
  // 数据和修改数据的function
  const [username,setUsername]=useState('')
  const [StoreArray,setStoreArray]=useState([])
  // 获得输入框的value值
  const handelChange=(e)=>{
    setUsername({
      username:e.target.value
    })
  }
  // 发送请求获得用户信息
  const serachUser=(username)=>{
    // console.log(username);
    if (username !==''){
    getUserInfo(username)
      .then((res)=>{
        // console.log(res);
        // 将返回的数据赋值给StoreArray 
        if (res.status === 200){
          // console.log(res.data,typeof res.data);
          setStoreArray([...res.data])
        }
      })
      .catch((err)=>{
        console.error(err);
      })
    }
    else alert('请输入user名')
  }
  
  // const a =StoreArray;
  return (
    <div>
      <Layout>
        {/* <MyHeader></MyHeader> */}
        <Content style={{ padding: '0 50px' }}>
          <Space direction="vertical">
            <Search 
              defaultValue=''
              onChange={handelChange}
              className='search'  
              placeholder="input search text" 
              onSearch={serachUser} 
              enterButton 
            />
          </Space>
        <StoreList username={username} StoreArray={StoreArray}></StoreList>  
        </Content>
      </Layout>
    </div>
  )
}

export default withRouter(DashBoard)