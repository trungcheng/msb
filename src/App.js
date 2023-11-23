import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
// import Footer from "./components/Footer";
import Footer from "./components/FooterModule";
import { Provider } from "./store";
import Error from "./components/Error";
import { Modal, Button, Form, Input } from 'antd';
import { setToken, removeToken, getToken } from "./utils";

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [values]);

  return (
    <Button 
      style={{ background: '#F4600C', color: '#FFFFFF', width: '48%' }} 
      htmlType="submit" 
      disabled={!submittable}
    >Đăng nhập</Button>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const onLogin = () => {
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Values: ', values);
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.token);
      setToken(res.token);
      setIsModalOpen(false);
      history.push('/profile');
    });
  };

  const onLogout = () => {
    removeToken();
    history.push('/');
    setTimeout(() => {
      location.reload();
  }, 1000);
  }
  
  return (
    <Provider>
      <>
        <Switch>
          <Route exact path="/page-not-found" component={Error} />
          <Route>
            <Header onLogin={onLogin} onLogout={onLogout} />

            <Switch>
              <Route exact path="/" component={Home} />
              {getToken() && <Route exact path="/profile" component={Profile} />}
              <Redirect to="/page-not-found" />
            </Switch>

            <Footer />

            <Modal 
              centered={true}
              title="Đăng nhập" 
              open={isModalOpen} 
              onOk={handleOk} 
              onCancel={handleCancel} 
              width={343}
              footer={null}
            >
              <Form
                form={form}
                name="validateOnly"
                onFinish={onFinish}
                layout="vertical" 
                autoComplete="off"
              >
                <Form.Item name="username" label="Tên tài khoản" rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản' }]}>
                  <Input placeholder="Nhập tên tài khoản" />
                </Form.Item>
                <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
                  <Input placeholder="Nhập mật khẩu" />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="reset" style={{ border: '1px solid #F4600C', color: '#F4600C', width: '48%' }} onClick={handleCancel}>Đóng</Button>
                    <SubmitButton form={form} />
                </Form.Item>
              </Form>
            </Modal>

          </Route>
        </Switch>
      </>
    </Provider>
  );
}

export default App;
