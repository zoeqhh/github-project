// 仓库列表组件
import React from 'react'
import { List,Layout } from 'antd'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const { Content } = Layout;

function StoreList(props) {
  const {StoreArray,username}=props
  // 点击查看特定store的详情
  const getdetails=(item)=>{
    // console.log(item)
    // 获得仓库信息 
    axios.get(`https://api.github.com/repos/${item.full_name}/contents`)
    .then((res)=>{
      console.log(res.data,typeof res.data);
      props.history.push({pathname:'/detail',state:{storeArray:res.data,storeName:item.name}})
    })
  }

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

  return (
    <Content style={{ padding: '0 24px', minHeight: 280 }}>
      <div>暂时没有仓库</div>
    </Content> 
  )
}

export default withRouter(StoreList)
