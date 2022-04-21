import React ,{useState} from 'react'
// import { getUserStore,getStoreDetaiMsg } from '../../services'
import {connect} from 'react-redux'
import {requestuserStoreAction} from '../../store/actions/user'

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
  console.log(props);
  // console.log(props)
  // 函数式组件中是用hook调用state  初始值  userState
  // 数据和修改数据的function
  // const [username,setUsername]=useState('')
  // const [StoreArray,setStoreArray]=useState([])
  // 获得输入框的value值
  const handelChange=(e)=>{
    props.requestuserStoreAction({
      // 将输入的值传给store 并修改
      username: e.target.value
    })
  }
  // 发送请求获得用户信息
  const serachUser=(username)=>{
    // console.log(username);
    if (username !==''){
      requestuserStoreAction(props.username)
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
        <StoreList username={props.username} StoreArray={props.StoreArray}></StoreList>  
        </Content>
      </Layout>
    </div>
  )
}

export default connect((state)=>({...state.user}), {requestuserStoreAction})(withRouter(DashBoard))