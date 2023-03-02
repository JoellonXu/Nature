import {Form, Button, Input, Checkbox} from "antd";
import axios from "axios";
import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

export default function Login(props){
    const navigate = useNavigate()
const onFinish = (value:any)=>{
    console.log(value)
    axios.get('api/login').then((res)=>{
        if(res.status === 200){
            if(res.data.login){
                navigate('/home')
        }}
    })
    }

    return (
        <div>
            <Form
            name='login'
            labelCol={{span:8}}
            wrapperCol={{span:16}}
            style={{maxWidth:600}}
            initialValues={{rember: true}}
            onFinish={onFinish}
            >
                <Form.Item
                label="用户"
                name="userName"
                rules={[{required: true, message: '请输入您的用户名！'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                label='密码'
                name='password'
                rules={[{required: true, message: '请输入您的密码！'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}