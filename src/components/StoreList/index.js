// 仓库列表组件
import React from 'react'
import { List, Layout, Button } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestStoreDetailAction } from '../../store/actions/user'

const { Content } = Layout
// 引入请求store详细信息的模块
function StoreList(props) {
  // 点击查看特定store的详情
  const getdetails = (item) => {
    props.history.push({ pathname: `/detail/${item.full_name}` })
    //   })
    requestStoreDetailAction(item.full_name)
  }
  // 如果仓库详细信息有内容 则返回详细信息显示页面
  if (props.storeArray.length > 0) {
    return (
      <Content style={{ padding: '0 50px', minHeight: 280 }}>
        <List
          size="small"
          header={(
            <div style={{ color: 'blue' }}>
              {props.username}
              的仓库列表
            </div>
)}
          bordered
          dataSource={props.storeArray}
          renderItem={
            (item) => (
              <List.Item key={props.storeArray.id}>
                {item.name}
                <Button type="primary" onClick={() => getdetails(item)} style={{ float: 'right' }}>查看详情</Button>
              </List.Item>
            )
}
        />
      </Content>
    )
  }
  // 没有内容 则返回没有仓库的显示页面
  return (
    <Content style={{ padding: '0 50px', minHeight: 280 }}>
      <div>暂时没有仓库</div>
    </Content>
  )
}

// @ts-ignore
export default connect((state) => ({ ...state.user }), { requestStoreDetailAction })(withRouter(StoreList))
