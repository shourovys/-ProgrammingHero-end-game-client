import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { createAccount } from "../../../redux/user/actions";
import { Container } from "../../../style/common";
import { FormContainer } from "../Login/Login.styles";

const SineUp = () => {
    const history = useHistory()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(createAccount(values,setLoading,history))
  };

  return (
    <Container>
      <FormContainer>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Sign Up
            </Button>
            &nbsp; &nbsp; <Link style={{color:'white'}} to="/auth/login">Or Log In!</Link>
          </Form.Item>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SineUp;
