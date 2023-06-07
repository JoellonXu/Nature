import React, { useEffect, useState } from "react";
import Article from "@/component/Article";
import ModalDialog from "@/component/ModalDialog";
import axios from "axios";
import { Button, Form, Input, Select } from "antd";

const SocialCircle: React.FC = () => {
  axios.post("api/articleList").then((res) => {
    console.log(res);
  });
  const [isModalShow, setIsModalShow] = useState(false);

  const testForm = () => {
    const onFinish = (value: any) => {
      console.log('value', value)
    }
    return (
      <Form onFinish={onFinish}>
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="性别" name="sex">
          <Select
            options={[
              { value: 0, label: "男" },
              { value: 1, label: "女" },
            ]}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
      </Form>
    );
  };
  const modalClick = () => {
    ModalDialog.show({
      title: "弹窗测试",
      content: testForm(),
      type: "success",
      ok: () => {
        alert("调用了ok");
      },
      cancel: () => {
        alert("调用了cancel");
      },
    });
  };
  return (
    <div>
      <Button onClick={modalClick}>点击</Button>
    </div>
  );
};
export default SocialCircle;
