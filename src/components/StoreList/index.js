// 仓库列表组件
import React from 'react'
import { List,Layout } from 'antd'
// 引入获取仓库详细信息的请求
import {getStoreDetaiMsg} from '../../services'

import { withRouter } from 'react-router-dom';
const { Content } = Layout;
// 引入请求store详细信息的模块

function StoreList(props) {
  const {StoreArray,username}=props
  // 点击查看特定store的详情
  const getdetails=(item)=>{
    // 获得仓库信息 
    getStoreDetaiMsg(item.full_name)
      .then(res=>{
        // 携带信息跳转页面
        props.history.push({pathname:'/detail',state:{storeArray:res.data,storeName:item.name}})
      })
  }
  // 如果仓库详细信息有内容 则返回详细信息显示页面
  if (StoreArray.length > 0) {
    return (
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <List
          size="small"
          header={<div style={{color: 'blue'}}>仓库列表</div>}
          bordered
          dataSource={StoreArray}
          renderItem={item => <List.Item key={StoreArray.id}>{item.name} <span onClick={()=>getdetails(item)} style={{float: 'right',color: 'blue'}}>查看详情</span></List.Item>}
        />
      </Content> 
    )
  }
  // 没有内容 则返回没有仓库的显示页面
  return (
    <Content style={{ padding: '0 24px', minHeight: 280 }}>
      <div>暂时没有仓库</div>
    </Content> 
  )
}

export default withRouter(StoreList)
