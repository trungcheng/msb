import React from 'react';
import { Breadcrumb, Tabs } from 'antd';
import { UserOutlined, FileTextOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { removeToken } from "../utils";

const Profile = () => {
    const history = useHistory();

    const onLogout = () => {
        removeToken();
        history.push('/');
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    
    const items = [
        {
            label: (
                <span>
                    <UserOutlined />
                    Thông tin tài khoản
                </span>
            ),
            key: 1,
            children: (
                <div>
                    <p className="tab-content-title">Thông tin chung</p>
                    <div className="tab-content-wrapper">
                        <div>
                            <p style={{ color: '#667085' }}>Họ và tên</p>
                            <p style={{ padding: '15px 0', color: '#667085' }}>Số CMND/CCCD</p>
                            <p style={{ color: '#667085' }}>Số điện thoại</p>
                        </div>
                        <div style={{ marginLeft: 40 }}>
                            <p style={{ fontWeight: 500 }}>Tran Van A</p>
                            <p style={{ padding: '15px 0', fontWeight: 500 }}>022090001234</p>
                            <p style={{ fontWeight: 500 }}>0912763488</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            label: (
                <span>
                    <FileTextOutlined />
                    Thông tin sản phẩm
                </span>
            ),
            key: 2,
            children: (
                <div>
                    <p className="tab-content-title">Thông tin sản phẩm</p>
                    <div className="tab-content-wrapper"></div>
                </div>
            )
        },
        {
            label: (
                <span>
                    <LogoutOutlined />
                    <a onClick={() => onLogout()}>Đăng xuất</a>
                </span>
            ),
            key: 3,
            children: null
        },
    ];

    return (
        <section style={{padding: '0 0 20px 0'}}>
            <div className='container'>
                <Breadcrumb
                    separator=">"
                    items={[
                        {
                            title: 'Trang chủ',
                        },
                        {
                            title: 'Quản lý tài khoản',
                            href: '',
                        },
                    ]}
                    style={{ padding: '20px 0' }}
                />

                <div>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="left"
                        items={items}
                    />
                </div>
            </div>
        </section>
    )
}

export default Profile;
