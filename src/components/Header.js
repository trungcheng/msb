import React, { useState, useContext } from 'react';
import { PhoneOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Button, Dropdown, Space, Avatar, Drawer, Form, Row, Col, Select, Input, Radio, Checkbox } from 'antd';
import { Context } from "../store";
import { Link } from "react-router-dom";

const { Option } = Select;

const getItem = (label, key, icon, children, onClick, type) => {
    return {
        key,
        icon,
        children,
        label,
        type,
        onClick
    };
}

const Header = (props) => {
    const value = useContext(Context);
    const [open, setOpen] = useState(false);
    
    const items = [
        getItem('Sản phẩm', 'product', null, [
            getItem('Thẻ tín dụng', 'visa', null, [
                getItem('MSB Mastercard mDigi', 'visa1'), 
                getItem('MSB Mastercard Super Free', 'visa2'),
                getItem('MSB Visa Online', 'visa3'),
                getItem('MSB Visa Travel', 'visa4'),
                getItem('MSB Visa Signature', 'visa5'),
            ]),
            getItem('Vay', 'lending'),
            getItem('Bảo hiểm', 'insurance'),
        ]),
        getItem('So sánh', 'compare', null, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
        ]),
        getItem('Câu hỏi thường gặp', 'question', null)
    ];

    if (!value.isLoggedIn) {
        items.push(getItem('Đăng nhập', 'login', null, null, () => {
            props.onLogin();
        }));
    }

    items.push(getItem('1900 6083', 'hotline', <PhoneOutlined />));

    const dropDownItems = [
        {
            key: '1',
            label: (
                <Link to="/profile">Quản lý tài khoản</Link>
            )
        },
        {
            key: '2',
            label: (
                <a onClick={() => props.onLogout()}>Đăng xuất</a>
            )
        }
    ];

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const footerRender = (
        <Button htmlType="submit" block>Xác nhận</Button>
    );

    return (
        <header>
            <div className="logo">
                <h1>
                    <a href="/">
                        <img src="images/logo.png" />
                    </a>
                </h1>
            </div>

            <Menu
                style={{ width: '100%', justifyContent: 'end' }}
                mode="horizontal"
                items={items}
            />

            <Button style={{ border: '1px solid #F4600C', color: '#F4600C' }} onClick={showDrawer}>Yêu cầu tư vấn</Button>

            {value.isLoggedIn && 
                <Dropdown menu={{ items: dropDownItems }}>
                    <a onClick={(e) => e.preventDefault()} style={{ marginLeft: 20, borderLeft: '1px solid #98A2B3' }}>
                        <Space style={{ width: 115, fontSize: 14, marginLeft: 20 }}>
                            <Avatar size="small" icon={<UserOutlined />} />
                            kminchelle
                            <DownOutlined style={{ width: '10px', paddingTop: '5px' }} />
                        </Space>
                    </a>
                </Dropdown>
            }

            <Drawer 
                width={500} 
                title="Yêu cầu tư vấn" 
                placement="right" 
                onClose={onClose} 
                open={open} 
                zIndex={9999}
            >
                <Form layout="vertical" hideRequiredMark>
                    <p style={{ fontSize: 18, fontWeight: 500, marginBottom: 20 }}>Thông tin khách hàng</p>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập họ và tên',
                                        whitespace: true,
                                    },
                                    {
                                        validator: (_, value) => {
                                            if (!value) return;

                                            if (value.length > 100) {
                                                return Promise.reject(new Error('Không nhập quá 100 ký tự'));
                                            }

                                            if (value.split(' ').length <= 1) {
                                                return Promise.reject(new Error('Vui lòng nhập họ và tên đầy đủ, có dấu cách ở giữa và chỉ chứa dấu nháy đơn.'));
                                            }

                                            if (value[0] == ' ' || value[value.length - 1] == ' ') {
                                                return Promise.reject(new Error('Không được nhập dấu cách ở đầu và cuối chuỗi'));
                                            }

                                            if (value.includes('  ')) {
                                                return Promise.reject(new Error('Không được nhập 2 dấu cách liền nhau'));
                                            }
                                        }
                                    },
                                ]}
                            >
                                <Input placeholder="Nhập họ và tên" />
                            </Form.Item>

                            <Form.Item
                                name="mobile"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại',
                                    },
                                ]}
                            >
                                <Input placeholder="Nhập số điện thoại" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn thành phố',
                                    },
                                ]}
                            >
                                <Select placeholder="Chọn thành phố">
                                    <Option value="xiao">Xiaoxiao Fu</Option>
                                    <Option value="mao">Maomao Zhou</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="district"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn quận/huyện',
                                    },
                                ]}
                            >
                                <Select placeholder="Chọn Quận/Huyện">
                                    <Option value="private">Private</Option>
                                    <Option value="public">Public</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    <Row gutter={16}>
                        <Col span={24}>
                            <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 10 }}>Giới tính</p>
                            <Form.Item
                                name="sex"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn giới tính',
                                    },
                                ]}
                            >
                                <Radio.Group name="radiogroup" defaultValue={1}>
                                    <Radio value={1}>Nam</Radio>
                                    <Radio value={2}>Nữ</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <p style={{ fontSize: 18, fontWeight: 500, marginBottom: 10 }}>Sản phẩm cần tư vấn</p>
                            <Form.Item
                                name="product"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn sản phẩm cần tư vấn',
                                    },
                                ]}
                            >
                                <Checkbox.Group
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Row>
                                        <Col span={12}>
                                            <Checkbox value="A">Thẻ tín dụng</Checkbox>
                                        </Col>
                                        <Col span={12}>
                                            <Checkbox value="B">Mua trước trả sau</Checkbox>
                                        </Col>
                                        <Col span={12}>
                                            <Checkbox value="C">Vay linh hoạt</Checkbox>
                                        </Col>
                                        <Col span={12}>
                                            <Checkbox value="D">Tài khoản M-Pro</Checkbox>
                                        </Col>
                                        <Col span={12}>
                                            <Checkbox value="E">Tiền nhanh</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16} style={{ marginTop: 20 }}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập thông tin',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="Nhập thông tin" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="ant-drawer-footer">
                        <Button htmlType="submit">
                            Xác nhận
                        </Button>
                    </div>
                </Form>
            </Drawer>
        </header>
    )
}

export default Header;
