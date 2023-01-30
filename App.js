import logo from './logo.svg';
import './App.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import pic from './we.jpg';


function App() {
  

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };





  return (
  <div className="App">
    <div className="divform">
    <div className="wrap-login100">
        
        <Form
          name="normal_login"
          className="login100-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
              >
            Email
            <Form.Item
              name="username"
              rules={[{ required: true, message: '* Required' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
      
            Password
            <Form.Item
              name="password"
              rules={[{ required: true, message: '* Required' }]}
            >
              <Input type="password" placeholder="Password"/>
            </Form.Item>
     
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
       
        </Form>
    <div className="login100-pic">
					<img src={pic} alt="IMG"/>
				</div>
    
    </div>

    
    
    </div>

  </div>
  );
}

export default App;
