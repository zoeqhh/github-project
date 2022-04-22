import React from 'react'
import { List } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestStoreDetailAction } from '../../store/actions/user'

import './index.css'

function Detail(props) {
  return (
    <div className="detailStore">
      <p>
        <span style={{ color: 'red', marginRight: '20px' }}>{props.location.pathname.slice(8)}</span>
        的仓库详情
      </p>
      <List
        dataSource={props.storeDetailArray}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={<span>{item.name}</span>}
            />
            <div>
              <span style={{ margin: '20px' }}>文件类型</span>
              {item.type}
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default connect(
  (state) => ({ ...state.user, ...state.global }),
  { requestStoreDetailAction },
)(withRouter(Detail))
