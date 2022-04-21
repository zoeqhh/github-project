import React from 'react'
import { List } from 'antd';
import {connect} from 'react-redux'
import {requestStoreDetailAction} from '../../store/actions/user'
import './index.css'

function Detail(props) {
  console.log(props);
  return (
    <>
      <div className='detailStore'>
        <p><span style={{color: 'red', marginRight:'20px'}}>{props.location.pathname.slice(8)}</span>的仓库详情</p>
        <List
          dataSource={props.storeDetailArray}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={<span>{item.name}</span>}
              />
              <div>{item.type}</div>
            </List.Item>
          )}
        />
      </div>
    </>
  )
}

// @ts-ignore
export default connect((state)=>({...state.user}),{requestStoreDetailAction})(Detail)
