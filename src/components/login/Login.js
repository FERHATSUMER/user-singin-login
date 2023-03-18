import { LockOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import data from "../../assets/data.json";
import Navbar from "../Navbar";
import "./login.css";

export default function Login({ setIsLogin ,setType}) {
  const [form] = Form.useForm();

  const list = data.users;

  const onFinish = (values) => {
    let user = list.find((item) => item.name == values.username);
    let isTrue = user.password == values?.password;
    let isType = user.usertype.toLocaleLowerCase() == "admin" ;
    setIsLogin(isTrue);
    setType(isType)
  };
  return (
    <div className="container-login">
  <Navbar/>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <h1>LOGIN</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            className="input-login"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="e-mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            className="input-login"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href=" ">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            LOGIN
          </Button>
          Or <a href=" ">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
