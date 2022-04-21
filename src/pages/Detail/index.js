import React from 'react'
import { Breadcrumb,Collapse } from 'antd';
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import {connect} from 'react-redux'
import {requestStoreDetailAction} from '../../store/actions/user'
const { Panel } = Collapse;

function Detail(props) {
  // console.log("detail中的", props);
  // const storeDetailArray=props.location.state.storeArray
  return (
    <>
      {/* store展示具体内容 */}
      <div style={{width: '70%', height: '100%', margin:'10px auto'}}>
        <p>仓库详情</p>
        <List
          dataSource={props.storeDetailArray}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={<span>{item.name}</span>}
                // description={item.name}
              />
              <div>{item.type}</div>
            </List.Item>
          )}
        />
      </div>
    </>
  )
}

export default connect((state)=>({...state.user}),{requestStoreDetailAction})(Detail)