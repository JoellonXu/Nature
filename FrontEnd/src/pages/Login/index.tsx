import {Form, Input, Checkbox, Button } from "antd";
import { NavLink} from "react-router-dom";


export  default  function Login(){
    const submit = (value:any)=>{
        console.log(value)
    }
    return (
        <div>
            <Form
            onFinish={submit}
            >
                <Form.Item
                label="账号"
                name='username'
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                label="密码"
                name='password'
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='remember'
                    valuePropName="checked"
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>提交</Button>
                </Form.Item>
            </Form>
        </div>
    )
}