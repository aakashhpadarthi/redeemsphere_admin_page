import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Registerpage.css';

const Registerpage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Here you would typically make an API call to register the user
      console.log('Registration values:', values);
      message.success('Registration successful!');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      message.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <Card className="register-card">
          <h2>Create an Account</h2>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            layout="vertical"
            className="register-form"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Full Name"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                block
              >
                Register
              </Button>
            </Form.Item>

            <div className="login-link">
              Already have an account?{' '}
              <Button type="link" onClick={() => navigate('/login')}>
                Login here
              </Button>
            </div>
          </Form>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Registerpage; 