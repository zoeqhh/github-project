import React from 'react'
import {
  Form, Input, Button, Checkbox,
} from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginSuccess } from '../../store/actions/global'
import './index.css'

function Login(props) {
  const history = useHistory()
  const login = () => {
    // 同步处理 派发登录成功action，匹配其reducer，进而改变isLogin的值
    props.loginSuccess(true)
    history.push('/dashboard')
  }
  return (
    <div className="login">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={login}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default connect((state) => ({ ...state.global }), { loginSuccess })(Login)
