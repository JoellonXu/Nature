import {Form, Button, Input, Checkbox} from "antd";
import axios from "axios";
import {Get} from "@/api/server"
import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"

export default function Login(props: any){ 
    const navigate = useNavigate()
    const {value} = useSelector((store)=> store.counter)
    const dispatch = useDispatch()
    const onFinish = (value:any)=>{
    console.log(value)
    Get('api/login', {
            accountNumber: value.userName,
            password: value.password
    }).then((res)=>{
      if(res.errno === 0 && res.res.token){
       dispatch(setToken({value: res.res.token}))
       navigate('/home')
      }   
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