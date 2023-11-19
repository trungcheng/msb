import React, { useState, useContext, useEffect } from 'react';
import { PhoneOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Button, Dropdown, Space, Avatar } from 'antd';
import { Context } from "../store";
import { Link } from "react-router-dom";

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

    return (
        <header>
            <div className="logo">
                <h1><img src="images/logo.png" /></h1>
            </div>

            <Menu
                style={{ width: '100%', justifyContent: 'end' }}
                mode="horizontal"
                items={items}
            />

            <Button style={{ border: '1px solid #F4600C', color: '#F4600C' }}>Yêu cầu tư vấn</Button>

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
        </header>
    )
}

export default Header;
